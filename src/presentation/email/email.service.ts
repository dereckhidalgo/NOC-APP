// import nodemailer,{SendMailOptions} from 'nodemailer';
// import { envs } from '../../config/plugins/envs.plugin';
// import { Attachment } from 'nodemailer/lib/mailer';
// import { LogRepository } from '../../domain/repository/log.repository';
// import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';




// export class EmailService{

//     private transporter = nodemailer.createTransport({
//         service: envs.MAILER_SERVICE,
//         auth:{
//             user: envs.MAILER_MAIL,
//             pass: envs.MAILER_SECRET_KEY,
//         }

//     });

//     constructor(){}


//     async sendEmail(options: SendMailOptions): Promise<boolean>{
//         const { to, subject, html, attachments } = options;

//         try{
//             const sentInformation = await this.transporter.sendMail({
//                 to,
//                 subject,
//                 html,
//                 attachments
//             });

//             console.log( sentInformation )

//             return true;
//         }catch( error ){
//             return false;
//         }
//     } 


//     async sendEmailAttachments(options: SendMailOptions):Promise<boolean>{
//         const {to, subject, html, attachments} = options;

//         try{
//             this.sendEmail({
//                 to,
//                 subject,
//                 html,
//                 attachments
//             });

//             return true;
//         }catch( error ){

//             return false;
//         }
//     }


//     async sendEmailWithLogsFile(   to: string | string[]  ):Promise<boolean>{

//         const subject= 'Logs del Servidor';

//         const htmlBody = `
//              <h3>LOGS DE SISTEMA - NOC</h3>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
//             when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
//             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//             <p> Ver logs adjuntos </p>
//         `;

//         const attachments: Attachment[] = [
//             { filename: 'logs-all.log', path: './logs/logs-all.log' },
//         ]

//         try{

            
//             return this.sendEmail({
//                 to,
//                 subject,
//                 html: htmlBody,
//                 attachments
//             });

//         }catch( error ){

//             console.log(error);
//             return false;
//         }
//     }
// } 