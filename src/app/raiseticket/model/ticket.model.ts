

export class TicketModel{
    constructor(
        public ID:number=0,
        public InternId:number=0,
        public Title:string="",
        public Description:string="",
        public IssueDate:Date=new Date(0),
        public Status:string="",
        public Priority:string=""){

        }
}
