var testitmonialData = [
    {
        college : "AITR",
        fullname : "Jaspreet Singh",
        companyname : "L&T Infotech (2017)",
        description : "I am placed in LTI. I am extremely thankful to the entire Firstjobzz team for all their support throughout the campus recruitment process. FJ modules and test series helped me a lot with my preparation, all the mentors are extremely supportive and friendly which makes it easy for students to settle quickly. Thanks FJ!",
        profileimage : "assets/img/photoscroll/noprofileimage.jpg" ,
    },
    {
        college : "SDBCT",
        fullname : "Prashasti Dubey",
        companyname : "ZenSar(2017)",
        description : "I am thankful to team FJ for their ultimate support and guidance. Especially Pratap sir for his help and guidance in shaping our future.",
        profileimage : "assets/img/photoscroll/noprofileimage.jpg" ,
    },
    {
        college : "AITR",
        fullname : "Aman Gupta",
        companyname : "L&T Infotech (2017)",
        description : "I got placed in L&T infotech .I am thankful to all the fj team for their support and mentor-ship which was needed to achieve this.. FirstJobzz regular test series and the precise study material helped me allot and made the goal even simpler to achieve... Thank you fj.",
        profileimage : "assets/img/photoscroll/noprofileimage.jpg" ,
    },
    {
        college : "AITR",
        fullname : "Lavina Soni",
        companyname : "L&T, Infotech (2017)",
        description : "I got placed in LTI. I want to extend my thanks to the FJ team for its amazing guidance and support. The team has always encouraged me for giving my best and boosting up my confidence. The team has a very proper planning for guiding you in a right direction and giving you the best knowledge. Thankyou.",
        profileimage : "assets/img/photoscroll/noprofileimage.jpg" ,
    },
    {
        college : "ATC",
        fullname : "Aayushi Nankani",
        companyname : "L&T Infotech (2017)",
        description : "I am placed in L&T Infotech. I believe that hard work without proper guidance will might not be fruitful.. i am happy that I joined fj family and got proper guidance and constant support which actually helped me achieve this. Thankyou the whole fj team for your constant efforts.",
        profileimage : "assets/img/photoscroll/Aayushi_Nankani_ATC-LT.jpg" ,
    },
    {
        college : "SDBCT",
        fullname : "Aastha Bhandari",
        companyname : "ZenSar(2017)",
        description : "I got placed in Zensar. At First Jobzz I got my 'first job' because of the guidance and support of the trainers. Whenever I think like I can't do this they encouraged me and converted it into \"yes I can!\" The FJ team gives me appropriate guidance about how to prepare for any company and the modules was also very helpful and specific. For me it was a new lease of life at FJ A hearty thanks to the FJ team.",
        profileimage : "assets/img/photoscroll/Aastha_Bhandari_SDBCT-Zensar.jpg" ,
    },
       
]

testitmonialData.map(data => {
    document.write("<div class=\"icon-box\" data-aos=\"fade-up\" data-aos-delay=\"100\">");
    document.write("<div class=\"row\">");
    document.write("<div class=\"col-lg-3\">");
    document.write(`<center><img alt=\"\"src=\" ${data.profileimage} \" class=\"rounded-circle\" style=\"height: 100px; width: 100px;\"/>`);
    document.write(`<h3 style=\"color: white;\"><br>${data.fullname}</h3>`);
    document.write(`<h3 style="color: #3888C2;">${data.companyname}</h3></center>`);
    document.write("</div>");
    document.write("<div class=\"col-lg-8\">");
    document.write(`<center><h3 style=\"color: #3888C2;\">${data.college}</h3></center>`);
    document.write(`<p style=\"color: white; text-align: justify;\">${data.description}</p>`);
    document.write("</div>");
    document.write("</div>");
    document.write("</div>");
})


        
          
           
          
           
            