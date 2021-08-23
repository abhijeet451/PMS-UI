
export class User{
    title: {
      id: Number;
      titleName: string;
    };
    Coutry: {
      id: Number;
      countryCode: Number;
      countryName: string;
    };
    firstName:string;
    lastName:string;
    emailId:string;
    contactNumber:number;
    dob:Date;
    userRole: {
      id: Number,
      roleName: string,
      roleType: string;
      };
    gender:string;
    passwrd:string
}