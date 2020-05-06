get(){
    return this.http.get<any>('http://localhost:3000/studentget/')
    
  }
post() {
    return this.http.post<any>('http://localhost:3000/studentpost/',{
        "studentID":"4",
        "studentName":"Natsu",
        "studentGrade":"A",
        "course":"One Piece",
        "address":"Japan",
        "contact":"1234567890"
    })
  }

put(){
    return this.http.put('http://localhost:3000/studentput/3',{
      "studentID":"3",
      "studentName":"Naruto",
      "studentGrade":"A",
      "course":"One Piece",
      "address":"Japan",
      "contact":"1234567890"
  })
  }
delete(){
    return this.http.delete('http://localhost:3000/studentdelete/4')
    
  }