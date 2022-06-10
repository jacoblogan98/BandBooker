require 'faker'

puts "Seeding Users...."

    u1 = User.create(username: 'jaclo23', email: "example0@gmail.com", password: "123", name: "Jacob")
    u2 = User.create(username: 'bitz820', email: "example1@gmail.com", password: "123", name: "Mark")
    u3 = User.create(username: 'elijahzmith', email: "example2@gmail.com", password: "123", name: "Elijah")
    u4 = User.create(username: 'paul.ghayad', email: "example3@gmail.com", password: "123", name: "Paul")
    u5 = User.create(username: 'nomadam', email: "example4@gmail.com", password: "123", name: "Adam")

puts "Done seeding Users!"

puts "Seeding Listings...."

    l1 = Listing.create(user: u1, title: "Retirement Party", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-12-17T10:30:00", location: Faker::Address.full_address)
    l2 = Listing.create(user: u2, title: "Birthday Party", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-11-14T12:00:00", location: Faker::Address.full_address)
    l3 = Listing.create(user: u3, title: "Wedding", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-09-02T14:00:00", location: Faker::Address.full_address)
    l4 = Listing.create(user: u4, title: "Live Music Needed", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-07-24T19:00:00", location: Faker::Address.full_address)
    l5 = Listing.create(user: u5, title: "Retirement Party", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-08-30T12:00:00", location: Faker::Address.full_address)
    l6 = Listing.create(user: u1, title: "Halloween Party", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-10-31T21:00:00", location: Faker::Address.full_address)
    l7 = Listing.create(user: u2, title: "Backyard BBQ", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-07-27T13:00:00", location: Faker::Address.full_address)
    l8 = Listing.create(user: u3, title: "Prom", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-09-22T17:00:00", location: Faker::Address.full_address)
    l9 = Listing.create(user: u4, title: "Christmas Party", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-12-25T14:00:00", location: Faker::Address.full_address)
    l10 = Listing.create(user: u5, title: "Bar Mitzvah", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-11-23T17:00:00", location: Faker::Address.full_address)
    l11 = Listing.create(user: u1, title: "Quinceañera", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-09-15T16:00:00", location: Faker::Address.full_address)
    l12 = Listing.create(user: u2, title: "Carnival", description: Faker::Lorem.paragraph_by_chars(number: 256), date: "2022-10-02T14:00:00", location: Faker::Address.full_address)

puts "Done seeding Listings!"

puts "Seeding Bands...."

    b1 = Band.create!(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band0@gmail.com", hourly_rate:"$50", location: Faker::Address.city)
    b2 = Band.create!(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band1@gmail.com", hourly_rate:"$60", location: Faker::Address.city)
    b3 = Band.create!(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band2@gmail.com", hourly_rate:"$80", location: Faker::Address.city)
    b4 = Band.create!(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band3@gmail.com", hourly_rate:"$40", location: Faker::Address.city)
    b5 = Band.create(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band4@gmail.com", hourly_rate:"$100", location: Faker::Address.city)
    b6 = Band.create(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band5@gmail.com", hourly_rate:"$86", location: Faker::Address.city)
    b7 = Band.create(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band6@gmail.com", hourly_rate:"$55", location: Faker::Address.city)
    b8 = Band.create(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band7@gmail.com", hourly_rate:"$37", location: Faker::Address.city)
    b9 = Band.create(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band8@gmail.com", hourly_rate:"$50", location: Faker::Address.city)
    b10 = Band.create(name: Faker::Music.band, genre: Faker::Music.genre, description: Faker::Lorem.paragraph_by_chars(number: 256), email: "band9@gmail.com", hourly_rate:"$92", location: Faker::Address.city)

puts "Done seeding Bands!"

puts "Seeding Gig Applications...."

    a1 = GigApplication.create(listing: l1, band: b1)
    a2 = GigApplication.create(listing: l2, band: b2)
    a3 = GigApplication.create(listing: l3, band: b5)
    a4 = GigApplication.create(listing: l4, band: b4)
    a5 = GigApplication.create(listing: l11, band: b3)
    a6 = GigApplication.create(listing: l6, band: b3)
    a7 = GigApplication.create(listing: l1, band: b3)
    a8 = GigApplication.create(listing: l8, band: b4)
    a9 = GigApplication.create(listing: l9, band: b5)
    a10 = GigApplication.create(listing: l2, band: b1)
    a11= GigApplication.create(listing: l4, band: b2)
    a12 = GigApplication.create(listing: l1, band: b5)
    a13 = GigApplication.create(listing: l8, band: b1)
    a14 = GigApplication.create(listing: l6, band: b4)
    a15 = GigApplication.create(listing: l11, band: b1)

puts "Done seeding Gig Applications!"

puts "Seeding Reviews...."

    r1 = Review.create!(band: b1, rating: 4, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u1)
    r2 = Review.create!(band: b1, rating: 5, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u2)
    r3 = Review.create(band: b2, rating: 2, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u4)
    r4 = Review.create(band: b3, rating: 3, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u3)
    r5 = Review.create(band: b3, rating: 5, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u5)
    r6 = Review.create(band: b4, rating: 1, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u2)
    r7 = Review.create(band: b5, rating: 3, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u3)
    r8 = Review.create(band: b6, rating: 4, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u5)
    r9 = Review.create(band: b1, rating: 5, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u1)
    r10 = Review.create(band: b3, rating: 2, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u3)
    r11 = Review.create(band: b4, rating: 5, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u2)
    r12 = Review.create(band: b1, rating: 3, comment: Faker::Lorem.paragraph(sentence_count: 4), user: u1)

    puts "Done seeding Reviews!"
