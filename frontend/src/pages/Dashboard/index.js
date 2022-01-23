import React, { useState, useMemo, useEffect } from 'react';
import {
    format,
    subDays,
    addDays,
    setHours,
    setMinutes,
    setSeconds,
    setMilliseconds,
    isBefore,
    isEqual,
    parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Time } from './styles';

// disclaimer: this should be on the api
const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

export default function Main() {
    const [schedule, setSchedule] = useState([]);
    const [date, setDate] = useState(new Date());

    const dateFormatted = useMemo(
        () => format(date, "d 'de' MMMM", { locale: pt }),
        [date]
    );

    useEffect(() => {
        async function loadSchedule() {
            const response = await api.get('schedules', {
                params: { date },
            });

            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            const data = range.map((hour) => {
                // set time to 0 hour, 0 min and 0 sec, 0 milliseconds
                const checkDate = setMilliseconds(
                    setSeconds(setMinutes(setHours(date, hour), 0), 0),
                    0
                );
                // set timezone to UTC
                const compareDate = utcToZonedTime(checkDate, timezone);

                return {
                    time: `${hour}:00h`,
                    past: isBefore(compareDate, new Date()),
                    appointment: response.data.find((a) =>
                        isEqual(parseISO(a.date), compareDate)
                    ),
                };
            });

            console.tron.log(response.data);

            setSchedule(data);
        }

        loadSchedule();
    }, [date]);

    function handlePrevDay() {
        setDate(subDays(date, 1));
    }

    function handleNextDay() {
        setDate(addDays(date, 1));
    }

    return (
        <Container>
            <header>
                <button type="button" onClick={handlePrevDay}>
                    <MdChevronLeft size={36} color="#FFF" />
                </button>
                <strong>{dateFormatted}</strong>
                <button type="button" onClick={handleNextDay}>
                    <MdChevronRight size={36} color="#FFF" />
                </button>
            </header>

            <ul>
                {schedule.map((time) => (
                    <Time
                        key={time.time}
                        past={time.past}
                        available={!time.appointment}
                    >
                        <strong>{time.time}</strong>
                        <span>
                            {time.appointment
                                ? time.appointment.user.name
                                : 'Available'}
                        </span>
                    </Time>
                ))}
            </ul>
        </Container>
    );
}
