enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    VK = 'VK',
    Facebook = 'Facebook',
    Instagram = 'Instagram'
}

const social = SocialMedia.Instagram
console.log(social)
