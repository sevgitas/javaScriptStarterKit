import UserService from "../services/userService"

console.log("User component yüklendi")

let userService=new UserService

userService.add()
userService.getById()
userService.list()
