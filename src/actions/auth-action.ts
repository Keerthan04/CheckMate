'use server'
import { signIn } from "@/auth"

//making all as actions
export async function signInAction(){
    await signIn('google',{redirectTo:"/loggedin"});
}