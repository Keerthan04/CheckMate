'use server'
import { signIn, signOut } from "@/auth"

//making all as actions
export async function signInAction(){
    await signIn('google',{redirectTo:"/loggedin"});
}

export async function signOutAction(){
    await signOut({redirectTo:"/"});//gets to home direct 
}