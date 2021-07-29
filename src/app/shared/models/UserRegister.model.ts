
export class User{
    title: {
      id: Number;
      titleName: String;
    };
    Coutry: {
      id: Number;
      countryCode: Number;
      countryName: String;
    };
    firstName:String;
    lastName:String;
    emailId:String;
    contactNumber:number;
    dob:Date;
    userRole: {
      id: Number,
      roleName: String,
      roleType: String;
      };
    gender:String;
    passwrd:String
}