import { NextResponse } from 'next/server'

export  async function GET(request) {  
  try {
    
     return NextResponse.json(
        { "users":"ok" }, 
        { status: 200 });
  } catch (error) {
   if(error){
      return NextResponse.json(
         { error: "rror" }, 
         { status: 500 });
   }
  }

}