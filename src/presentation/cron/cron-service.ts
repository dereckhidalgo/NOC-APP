import { CronJob } from "cron";
import { on } from "events";


type TCronTime = string | Date;
type TOnTick = () => void;


export class CronService {


    public static createJob( cronTime: TCronTime, onTick: TOnTick ): CronJob {
        
    const job = new CronJob(
        cronTime,
        onTick,
    );

    
    job.start();

    return job;
    }



}