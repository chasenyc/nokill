# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(
  email: 'chasenyc@gmail.com',
  fname: 'Alex',
  lname: 'Harris',
  phone_number: '212-555-1212',
  password: 'password11'
)

Species.create([{name: 'Dog'},{name: 'Cat'}])

Breed.create([
  {species_id: 1, breed: 'Akita'},
  {species_id: 1, breed: 'Husky'},
  {species_id: 1, breed: 'Australian Cattle Dog'},
  {species_id: 1, breed: 'Retriever, Labrador'},
  {species_id: 1, breed: 'Chihuahua'},
  {species_id: 1, breed: 'Shih Tzu'},
  {species_id: 1, breed: 'Poodle'},
  {species_id: 1, breed: 'Maltese'},
  {species_id: 1, breed: 'Spaniel'},
  {species_id: 1, breed: 'Terrier, American Staffordshire'},
  {species_id: 1, breed: 'Terrier, Yorkshire'},
  {species_id: 1, breed: 'Terrier, West Highland White'},
  {species_id: 1, breed: 'Terrier, Russell'},
  {species_id: 1, breed: 'Terrier, Rat'},
  {species_id: 1, breed: 'Hound'},
  {species_id: 1, breed: 'Whippet'},
  {species_id: 1, breed: 'Border Collie'},
  {species_id: 1, breed: 'Bulldog'},
  {species_id: 1, breed: 'Terrier, Pit Bull'},
  {species_id: 1, breed: 'Doberman Pinscher'},
  {species_id: 1, breed: 'Greyhound'},
  {species_id: 1, breed: 'Shepherd'},
  {species_id: 1, breed: 'German Shepherd'},
  {species_id: 1, breed: 'Pekingese'},
  {species_id: 1, breed: 'Pomeranian'},
  {species_id: 1, breed: 'Shiba Inu'},
  {species_id: 1, breed: 'Schnauzer'},
])

Animal.create(
  owner_id: 1,
  name: 'Emma',
  gender: 'm',
  birthdate: DateTime.new(2008, 9, 23),
  species_id: 1,
  breed_id: 7,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Puppy_on_Halong_Bay.jpg',
  reason_id: 1,
  origin: 'born in home',
  bitten: false
)
