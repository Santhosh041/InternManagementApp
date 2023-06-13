export class SolutionModel{
    constructor(
        public solutionId:number=0,
        public ticketId:number=0,
        public adminId:number=0,
        public solution:string="",
        public provisionDate:Date=new Date(0),
        public category :string ="",
        public priority:string =""
    ){
        
    }
}