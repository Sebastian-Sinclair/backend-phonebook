
/*
if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}




mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
})


if (process.argv[3]) {
person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})
} else {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}




*/