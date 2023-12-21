import { NextResponse } from 'next/server'
const  {User} = require("../../../../database/models/index");
export  async function GET(request) {  
  try {
     const users = await User.findAll()
     return NextResponse.json(
        { users }, 
        { status: 200 });
  } catch (error) {
   if(error){
      return NextResponse.json(
         { error: error }, 
         { status: 500 });
   }
  }

}