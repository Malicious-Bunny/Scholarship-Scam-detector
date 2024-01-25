interface ResourceList {
    url: string,
    title: string
    imageUrl : string
    description: string
    
}
const PoopNotfound : string = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/54adb844-d78c-4a63-9a83-b6229792972b/dd1lbth-fd082fb2-b999-4cbd-b711-5ee9e51090d1.png/v1/fill/w_978,h_817,q_70,strp/discord_poop_by_alex13art_dd1lbth-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI1OSIsInBhdGgiOiJcL2ZcLzU0YWRiODQ0LWQ3OGMtNGE2My05YTgzLWI2MjI5NzkyOTcyYlwvZGQxbGJ0aC1mZDA4MmZiMi1iOTk5LTRjYmQtYjcxMS01ZWU5ZTUxMDkwZDEucG5nIiwid2lkdGgiOiI8PTI3MDQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VqOGe3HfCc9qIhIdBYoV9Nu1PXNv_QD3d3gV81sS2GI"
const LegitSites : Array<ResourceList> = [
    {
        url: "https://www.smscholarships.com/partner/search.cfm?id=52",
        title : "SallieMae Scholarship Search ",
        imageUrl : PoopNotfound,
        description : "Sallie Mae Scholarship Search"

    },
    {
        url:"https://jlvcollegecounseling.com/scholarships/",
        title: "JLV College Counseling",
        imageUrl : 'https://admissions411.files.wordpress.com/2016/03/scholarships-and-contests5.png',
        description : "Scholarships Database | JLV College Counseling"
    },
    {
        url : "https://how2winscholarships.com/tips-on-finding-scholarships-with-fastweb/",
        title: "Fast Webb",
        description : "Have you ever tried finding scholarships with Fastweb? Get inside info about how to find scholarships using the #1 scholarship resource.",
        imageUrl : "https://how2winscholarships.com/wp-content/uploads/2018/02/Fastweb-Find-more-college-scholarships.jpg"
    },
    {
        url : "http://tracking.appily.com/aff_c?offer_id=5&aff_id=1655",
        title: "Appily",
        imageUrl : PoopNotfound,
        description : "Appily"
    },
    {
        url : "http://scholarships360.org/",
        title: "Scholarships360",
        description : "Scholarships360 is a scholarships website dedicated to finding great scholarship opportunities for students & providing financial aid advice.",

        imageUrl : PoopNotfound,
    },
    {
        url : "https://studentscholarships.org/applyforscholarships.php",
        title: "Student Scholarships",
        imageUrl: "https://d2zhlgis9acwvp.cloudfront.net/images/screen.jpg",
        description : "StudentScholarships.org has been providing scholarship information to students and scholarship management services to companies since 2003."
    },
    {
        url : "https://bigfuture.collegeboard.org/scholarship-search",
        title: "College Board",
        imageUrl : PoopNotfound,
        description : "Use Scholarship Search to find the right scholarship for you."
    }
]

const resourceList : Array<ResourceList> = [
    {
        url : 'https://www.businessinsider.com/signs-scholarship-scam-2018-11',
        title: '5 signs the scholarship youre applying for may be a scam',
        imageUrl : "https://i.insider.com/5bfd5ca448eb12508600aeb3?width=1200&format=jpeg",
        description : "Language like &quot;limited time offer&quot; and &quot;winning guaranteed or your money back&quot; are common signs of scholarship scams."
    },
    {
        url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-financial-aid-scams",
        title: "How to avoid scholarship and financial aid scams",
        imageUrl : "https://consumer.ftc.gov/themes/custom/cfg_uswds/img/ftc_social_share_default_en.jpg",
        description : "Scammers are targeting college students with fake scholarships and financial aid scams. Learn how to spot a scam and avoid being a victim."
    },
    {
        url: "https://www.findyourchristiancollege.com/post/10-tips-on-how-to-spot-scholarship-scams",
        title: "10 tips on how to spot scholarship scams",
        imageUrl: "https://assets-global.website-files.com/62bf1fdea6852623c4d99a5a/63ed07bf0b148fcdc7b35f28_student%20putting%20money%20into%20an%20education%20jar%20(1).jpg",
        description : "Do you know how to spot scholarship scams and fake financial aid offers? Learn the red flags and get advice on finding legit scholarships here!"
    },
    {
        url : "https://www.appily.com/guidance/articles/paying-for-college/beware-of-scholarship-scams",
        title: "Beware of scholarship scams",
        description : "Scholarship scams are a form of fraud. They trick unsuspecting students into giving away money or their identity. Click to learn about the warning signs now.",
        imageUrl : PoopNotfound,
    },
    {
        url: "https://admissions.usf.edu/blog/how-to-avoid-college-scholarships-and-grants-scams",
        title: "How to avoid college scholarships and grants scams",
        imageUrl : "https://admissions.usf.edu/hubfs/adm-how-to-avoid-college-scholarships-grants-scams-index.jpg#keepProtocol",
        description : "Avoid college scholarships and financial aid scams by knowing the types of scams and red flags to watch out for. "
    },
]

export default resourceList;
export {LegitSites};