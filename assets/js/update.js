var update = [
    {
        heading:  "Whats new: ",
        description: "",
    }
]

update.map(data =>{
   document.write(`<marquee behavior="" direction=""><p class="headline text" style="margin: 0px;">${data.heading} ${data.description}</p></marquee>`);
})