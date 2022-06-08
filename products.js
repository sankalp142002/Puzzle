const Products=[
    {
        id: 1,
        name: 'first pro',
        category: 'Latest coll',
        star: 5,
        price: 5214,
        img: 'images/products/l1.webp',
    },

    {
        id: 2,
        name: 'second pro',
        category: 'Latest coll',
        star: 5,
        price: 8479,
        img: 'images/products/l1.webp',
    },

    {
        id: 3,
        name: 'third pro',
        category: 'Lehenga',
        star: 5,
        price: 6549,
        img: 'images/products/l1.webp',
    },

]

function display(){
    var latestCol = document.getElementById('latestcoll');

    const productData=Products.filter((item)=>item.category=='Latest coll');

    productData.map(item=>{
        var card=document.createElement('div');

        var proImg=document.createElement('img');

        var dec=document.createElement('div');

        var span=document.createElement('span');
        var h5=document.createElement('h5');
        var star=document.createElement('div');
        var i=document.createElement('i');
        var h4=document.createElement('h4');

        var a=document.createElement('a');


        card.setAttribute('class','product');
        proImg.src=item.img;
        dec.setAttribute('class','dec');
        span.innerText='Puzzle';
        h5.innerText=item.name;
        star.setAttribute('class','star');
        i.setAttribute('class','fas fa-star');
        h4.innerText='₹ '+item.price;
        a.innerHTML='<i class="fa-solid fa-cart-shopping cart">';


        star.appendChild(i);

        dec.appendChild(span);
        dec.appendChild(h5);
        dec.appendChild(star);
        dec.appendChild(h4);

        card.appendChild(proImg);
        card.appendChild(dec);
        card.appendChild(a);

        latestCol.appendChild(card)
    })
}
display();