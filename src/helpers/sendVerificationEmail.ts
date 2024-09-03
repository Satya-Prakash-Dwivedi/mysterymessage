import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { string } from "zod";

export async function sendVerificationEmail(
    email : string, 
    username : string,
    otp : string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from : 'you@example.com',
            
        })
        return{success : true, message : "Successfully send verification email"}
    } catch (emailError) {
        console.error("Error sending verification email", emailError)
        return{success : false, message : "Failed to send verification email"}
    }
}