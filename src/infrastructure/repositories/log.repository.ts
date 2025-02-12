import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";

export class LogRepositoryImp implements LogRepository{

    constructor(
        private readonly logDataSource: LogDatasource,

    ){}

    async saveLog(log: LogEntity): Promise<void> {
        this.logDataSource.saveLog( log );
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDataSource.getLogs( severityLevel );
    }



}