export default class UserService{
    add(){
        console.log("kullanıcı eklendi")
    }
    list(){
        console.log("kullanıcılar listelendi")
    }
    getById(){
        console.log("kullancı detayı getirildi")
    }
}
 // export dışarıdan import edileceği anlamına geliyor.default ise service çağrıldığında default olarak gelmesi için