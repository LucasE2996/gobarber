import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfiguration from '../config/redis';

const jobs = [CancellationMail];

class Queue {
    constructor() {
        this.queues = {};

        this.init();
    }

    /**
     * Initializes all jobs fullfiling the queues object
     */
    init() {
        jobs.forEach(({ key, handle }) => {
            this.queues[key] = {
                bee: new Bee(key, {
                    redis: redisConfiguration,
                }),
                handle,
            };
        });
    }

    /**
     * Adds new job to the queue (fila)
     * @param queue The queue which the job will be added to.
     * @param job Job data
     */
    add(queue, job) {
        return this.queues[queue].bee.createJob(job).save();
    }

    /**
     * Process all jobs from job list
     */
    processQueue() {
        jobs.forEach(job => {
            const { bee, handle } = this.queues[job.key];

            bee.process(handle);
        });
    }
}

export default new Queue();
