

export class TicketModel{
    constructor(
        public id:number=0,
        public internId:number=0,
        public title:string="",
        public description:string="",
        public issueDate:Date=new Date(0),
        public status:string="",
        public priority:string="",
        public category:string=""){

        }
}
