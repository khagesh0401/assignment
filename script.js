let bt= document.getElementById("bt");

let con=document.getElementById("con");

function getdata()
{
    url="https://tva.staging.b2brain.com/search/autocomplete_org_all/";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}

getdata();

function postdata()
{ 
    url="https://tva.staging.b2brain.com/search/autocomplete_org_all/";
    data='{"company": "King, Fowler and HarveyVdZQ", "slug": "doner-advertising", "location": {"name": "Southfield, MI", "slug": "southfield-mi"}, "vertical": "Business Services", "color": "pink", "logo": "", "website": "www.e8202young-andrews.com"}, {"company": "Garcia-BrownQ0Kr", "slug": "ust-global", "location": {"name": "Aliso Viejo, CA", "slug": "aliso-viejo-ca"}, "vertical": "Software & Technology", "color": "light-blue", "logo": "", "website": "www.dkw5khunt.biz"}, {"company": "Dawson-Hoffman0kZJ", "slug": "boise-cascade", "location": {"name": "Boise, ID", "slug": "boise-id"}, "vertical": "Manufacturing & Automobile", "color": "pink", "logo": "", "website": "www.2bwwvphillips.biz"}, {"company": "Scott-WilsonzQPk7", "slug": "vizury", "location": {"name": "Bengaluru, India", "slug": "bengaluru-india"}, "vertical": "Software & Technology", "color": "red", "logo": "", "website": "www.zn3wqvelazquez.com"}, {"company": "Farmer PLCO4GNg", "slug": "ntintcom", "location": {"name": "Laguna Niguel, CA", "slug": "laguna-niguel-ca"}, "vertical": "Software & Technology", "color": "red", "logo": "", "website": "www.a4nyyhart-house.net"}, {"company": "Allen, Miller and CoxxDZ", "slug": "irislogic-inc", "location": {"name": "Santa Clara, CA", "slug": "santa-clara-ca"}, "vertical": "Software & Technology", "color": "cyan", "logo": "", "website": "www.b4n1lane.com"}, {"company": "Alvarez LtdmrqqM", "slug": "talaris-therapeutics", "location": {"name": "Mountain View, CA", "slug": "mountain-view-ca"}, "vertical": "Software & Technology", "color": "deep-orange", "logo": "", "website": "www.ekpq5west.com"}, {"company": "Humphrey PLCqZbe2", "slug": "navihealthcom", "location": {"name": "Mountain View, AR", "slug": "mountain-view-ar"}, "vertical": "Software & Technology", "color": "indigo", "logo": "", "website": "www.jaz6qharrison.com"}, {"company": "Sanchez, Stevens and WallsQmKGj", "slug": "aviarinccom", "location": {"name": "Annapolis, MD", "slug": "annapolis-md"}, "vertical": "Business Services", "color": "teal", "logo": "", "website": "www.4b03otorres-fleming.info"}, {"company": "Watts GroupX26a", "slug": "qbe", "location": {"name": "Sydney, New South Wales, Australia", "slug": "sydney-new-south-wales-australia"}, "vertical": "Finance & Insurance", "color": "light-blue", "logo": "", "website": "www.eokq5ross.com"}'
    parameter={
        method:'post',
        Headers:{
            'content-Type':'application/json'
        },
        body:(data)
    }
    
    fetch(url,parameter).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })

}


postdata();