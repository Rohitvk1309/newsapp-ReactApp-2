import React, { Component,useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'


export class News extends Component {

  // const[loading,setLoading] = useState(true)
  articles = [
    {
      "source": {
        "id": null,
        "name": "WPVI-TV"
      },
      "author": null,
      "title": "Earthquake felt in New Jersey and Philadelphia region; shaking felt from New York City to Baltimore - WPVI-TV",
      "description": "A 4.8 magnitude earthquake hit Hunterdon County, New Jersey on Friday morning, with shaking felt across the Northeast, including Philadelphia.",
      "url": "https://6abc.com/earthquake-nj-2024-philadelphia-pennsylvania-new-york-today/14622010/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/14622331_040524-wpvi-2024-earthquake-map-nj-philadelphia-img.png?w=1600",
      "publishedAt": "2024-04-05T15:56:15Z",
      "content": "PHILADELPHIA (WPVI) -- A 4.8 magnitude earthquake hit Hunterdon County, New Jersey on Friday morning, with shaking felt across the Northeast, including Philadelphia.\r\nIt was centered between the town… [+3560 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "WILL WEISSERT",
      "title": "Biden is touring collapsed Baltimore bridge where recovery effort has political overtones - The Associated Press",
      "description": "President Joe Biden is expected to get a firsthand look at efforts to clear away the hulking remains of the collapsed Francis Scott Key Bridge in Baltimore. Cranes, ships and diving crews are working to reopen one of the nation’s main shipping lanes. Biden wa…",
      "url": "https://apnews.com/article/biden-visit-baltimore-bridge-collapse-politics-b4388845fc912f0a0b491d05b5ac5cf8",
      "urlToImage": "https://dims.apnews.com/dims4/default/3900203/2147483647/strip/true/crop/6000x3375+0+313/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc0%2F7b%2Fbdaa36b3012b8b4022f8cdbe3231%2F24a661b5fdaf4033aa3ce3ef0aaaccf4",
      "publishedAt": "2024-04-05T15:42:00Z",
      "content": "WASHINGTON (AP) President Joe Biden is expected to get a firsthand look Friday at efforts to clear away the hulking remains of the collapsed Francis Scott Key Bridge in Baltimore, as cranes, ships an… [+5511 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "Anthony D'Alessandro",
      "title": "‘Monkey Man’ Waves Off ‘First Omen’ Curse In Thursday Night Previews, $1.4M To $725K; ‘Godzilla x Kong’ Crosses $100M – Box Office - Deadline",
      "description": "'Godzilla x Kong' will reign supreme with $30M+ as 'Monkey Man' and 'First Omen' Duke it Out for No. 2 with $12M",
      "url": "http://deadline.com/2024/04/box-office-monkey-man-first-omen-godzilla-x-kong-1235876709/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2024/04/The-First-Omen-Monkey-Man.jpg?w=1024",
      "publishedAt": "2024-04-05T15:38:00Z",
      "content": "Universal/Monkeypaw’s Dev Patel action movie Monkey Manand 20th Century Studios’ First Omenare both projected to do north of $12M, but the former had the edge over the latter on Thursday night in pre… [+1828 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Benjamin Weinthal",
      "title": "Israelis fear Biden’s 'intolerable' cease-fire demand means victory for Hamas - Fox News",
      "description": "Israeli experts argue Biden is impeding the Jewish state’s war plan to defeat the Hamas terrorist movement as the six-month campaign continues with a final incursion set for Rafah in Gaza",
      "url": "https://www.foxnews.com/world/israelis-fear-bidens-intolerable-cease-fire-demand-means-victory-hamas",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2018/09/israel-flag.jpg",
      "publishedAt": "2024-04-05T15:35:00Z",
      "content": "JERUSALEM - President Bidens push Thursday in a telephone call with Israeli Prime Minister Benjamin Netanyahu for an immediate cease-fire in the Jewish states six-month war campaign to defeat the ter… [+7649 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Natalie Neysa Alund",
      "title": "6.8 magnitude earthquake registered near Mariana Islands; so far no tsunami threat issued - USA TODAY",
      "description": "The notable quake was recorded just after 6 a.m. local time in the Maug Islands region, north of the islands near Saipan, Saipan, the USGS reported.",
      "url": "https://www.usatoday.com/story/news/world/2024/04/05/earthquake-mariana-island-tsunami-threat/73214767007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/04/05/USAT/73214841007-68-quake.png?crop=1290,725,x0,y0&width=1290&height=725&format=pjpg&auto=webp",
      "publishedAt": "2024-04-05T15:22:30Z",
      "content": "Earthquake hits New York area:Click here for coverage of the 4.8 magnitude temblor that hit New York-New Jersey on Friday morning\r\nA powerful 6.8 magnitude earthquake struck near the Mariana Islands … [+1617 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Kstp.com"
      },
      "author": "Morgan Reddekopp",
      "title": "Minnesota dairy farmers on alert for bird flu - KSTP",
      "description": "The cases confirmed by the U.S. Department of Agriculture last week mark the first known cases of bird flu in cattle.",
      "url": "https://kstp.com/kstp-news/top-news/minnesota-dairy-farmers-on-alert-for-bird-flu/",
      "urlToImage": "https://kstp.com/wp-content/uploads/2024/04/BIRD-FLU-COW-IMPACT_PKG_KSTP3cfa_146_mxf_00.00.43.00.jpg",
      "publishedAt": "2024-04-05T15:07:54Z",
      "content": "Dairy farmers in Minnesota are on high alert for avian influenza, as cows in a growing number of states become infected.\r\nThe cases confirmed by the U.S. Department of Agriculture last week mark the … [+3585 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Adrian Wojnarowski",
      "title": "USC's Bronny James entering NBA draft, transfer portal - ESPN",
      "description": "Bronny James will enter the NBA draft as well as the transfer portal. The USC freshman and son of LeBron James averaged 4.8 points, 2.8 rebounds and 2.1 assists.",
      "url": "https://www.espn.com/nba/story/_/id/39879943/usc-bronny-james-entering-nba-draft-transfer-portal",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0405%2Fr1314611_1296x729_16%2D9.jpg",
      "publishedAt": "2024-04-05T15:00:00Z",
      "content": "USC freshman guard Bronny James will enter the 2024 NBA draft while maintaining his college eligibility and will also enter the transfer portal, he said Friday on Instagram.\r\nJames had been expected … [+2237 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "mlive.com"
      },
      "author": "Mark Torregrossa | mtorregr@mlive.com",
      "title": "Solar Eclipse cloud update: Fine tune where you’ll view based on sky conditions - MLive.com",
      "description": "Here's the latest cloud cover forecast for Monday's total solar eclipse.",
      "url": "https://www.mlive.com/weather/2024/04/solar-eclipse-cloud-update-fine-tune-where-youll-view-based-on-sky-conditions.html",
      "urlToImage": "https://www.mlive.com/resizer/v2/CUL4OR4KMZC5LH3SXLRST47HCY.png?auth=71cd68adf6487e5182e4d58fa427f12681b4f23cb2a3f556f216e929647b6265&width=1280&quality=90",
      "publishedAt": "2024-04-05T14:36:00Z",
      "content": "Heres a look at the cloud forecast for Monday afternoon. Unfortunately, it looks like much of the total eclipse path will have some cloudiness. There should be a few clear spots. Lets find those best… [+1303 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Rob Picheta",
      "title": "Israeli military fires two senior officers as report finds strike on aid workers was in ‘violation of commands’ - CNN",
      "description": "The IDF fired two senior officers and reprimanded a top commander as it admitted a catalog of failures in a a drone strike on an aid convoy in Gaza, including that it killed aid workers who had survived an initial attack.",
      "url": "https://www.cnn.com/2024/04/05/middleeast/israel-idf-world-central-kitchen-strike-report-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24093293625470-2.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-04-05T14:15:00Z",
      "content": "The IDF fired two senior officers and reprimanded a top commander as it admitted a catalog of failures in a drone strike on an aid convoy in Gaza, including that it killed aid workers who had survive… [+3991 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Lisa Respers France",
      "title": "Suki Waterhouse posts first photo of child with Robert Pattinson - CNN",
      "description": "Suki Waterhouse has debuted her joint production with Robert Pattinson.",
      "url": "https://www.cnn.com/2024/04/05/entertainment/suki-waterhouse-robert-pattinson-baby/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1749410776.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-04-05T13:50:00Z",
      "content": "Suki Waterhouse has debuted her joint production with Robert Pattinson.\r\nThe Daisy Jones &amp; The Six star posted a photo to her verified Instagram on Thursday showing her cradling a baby believed t… [+706 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "TheStreet"
      },
      "author": "Ian Krietzberg",
      "title": "Key analyst says latest Apple move would be a 'horror show' - TheStreet",
      "description": "Wedbush's Dan Ives doesn't support Apple's newest project.",
      "url": "https://www.thestreet.com/technology/apple-robotics-electric-car-technology-artificial-intelligence-analyst-dan-ives-horror-show",
      "urlToImage": "https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAyODM0Mjg2ODUwNjE0MzQw/alabama-v-auburn.jpg",
      "publishedAt": "2024-04-05T13:35:54Z",
      "content": "Fast Facts\r\n<ul><li>Apple is reportedly exploring the development of personalized robots. </li><li>The move comes just a few weeks after Apple shut down its electric car project. </li><li>Wedbush ana… [+2711 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Ripley: 'Spellbinding' or 'charmless'? Critics divided over Andrew Scott in Netflix drama - BBC.com",
      "description": "Critics call the star of the Netflix drama both \"absolutely spellbinding\" and \"utterly charmless\".",
      "url": "https://www.bbc.com/news/entertainment-arts-68739102",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1AE8/production/_133088860_mediaitem133083130.jpg",
      "publishedAt": "2024-04-05T13:10:54Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "Fan who caught Shohei Ohtani's first Dodgers home run says she didn't even get to meet superstar - CBS Sports",
      "description": "Ohtani slugged the first home run of his $700 million contract Wednesday night",
      "url": "https://www.cbssports.com/mlb/news/fan-who-caught-shohei-ohtanis-first-dodgers-home-run-says-she-didnt-even-get-to-meet-superstar/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/04/05/363b4e01-abc9-4041-b2da-c0c5df124159/thumbnail/1200x675/43b892b595767cb224e08f107f6fc442/ohtani-getty.png",
      "publishedAt": "2024-04-05T12:40:57Z",
      "content": "Superstar Shohei Ohtani recently hit his first home run since signing a record $700 million free-agent contract with the Los Angeles Dodgers this past offseason. His first homer as a Dodger came duri… [+1783 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Emily DeLetter",
      "title": "Powerball jackpot hops to $1.23 billion: When is next lottery drawing? - USA TODAY",
      "description": "The Powerball jackpot sits at $1.23 billion, the 4th-largest in the game's history, before the next drawing on April 6.",
      "url": "https://www.usatoday.com/story/money/lottery/2024/04/05/powerball-drawing-lottery-jackpot/73214381007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/19/USAT/73028573007-usatsi-22734106.jpg?crop=3949,2221,x0,y18&width=3200&height=1800&format=pjpg&auto=webp",
      "publishedAt": "2024-04-05T12:39:55Z",
      "content": "With no winners in over four months, the Powerball jackpot continues to climb and inch toward shattering new records.\r\nThe jackpot currently sits at an estimated $1.23 billion with a $595.1 million c… [+4851 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fox Business"
      },
      "author": "Nikolas Lanum",
      "title": "Google Gemini may soon get major changes, including a subscription model and Gmail suggestions on Android - Fox Business",
      "description": "The Google Gemini AI may soon be incorporated in Google Search as part of a premium subscription model and give Android users new features in the Gmail app.",
      "url": "https://www.foxbusiness.com/media/google-gemini-soon-get-major-changes-subscription-model-gmail-suggestions-android",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/04/0/0/gemini-gmail.png?ve=1&tl=1",
      "publishedAt": "2024-04-05T12:22:00Z",
      "content": "Google’s Gemini artificial intelligence (AI) chatbot may soon see significant changes, including reply features with Gmail on Android and a new subscription model.\r\nAccording to the Financial Times, … [+3618 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "AMIR VAHDAT Associated Press",
      "title": "Iran vows to 'punish Zionist regime' over deadly strike on Iranian consulate attributed to Israel - ABC News",
      "description": "The commander of Iran’s powerful Revolutionary Guard has warned that “our brave men will punish the Zionist regime.\"",
      "url": "https://abcnews.go.com/International/wireStory/irans-revolutionary-guard-commander-vows-retaliation-strike-killed-108883596",
      "urlToImage": "https://i.abcnewsfe.com/a/27ec615a-bf36-4789-8f77-f3a7627c72d7/wirestory_e07df55596d48413fb87bf43711c9441_16x9.jpg?w=1600",
      "publishedAt": "2024-04-05T12:11:15Z",
      "content": "TEHRAN, Iran -- The commander of Iran's powerful Revolutionary Guard warned Friday that our brave men will punish the Zionist regime, escalating threats against Israel for an airstrike that killed se… [+2221 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fox Business"
      },
      "author": "Eric Revell",
      "title": "Apple and Nvidia may see supply chain disruptions from Taiwan earthquake - Fox Business",
      "description": "Taiwan was struck by its biggest earthquake in 25 years this week and the country's semiconductor industry may face some disruptions as it restores operations.",
      "url": "https://www.foxbusiness.com/technology/apple-nvidia-may-see-supply-chain-disruptions-taiwan-earthquake",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/04/0/0/TSMC-Taiwan.jpg?ve=1&tl=1",
      "publishedAt": "2024-04-05T12:00:00Z",
      "content": "The biggest earthquake to hit Taiwan in at least 25 years will likely cause a temporary disruption of the supply chain for semiconductors\r\n and related tech products as manufacturers restore normal o… [+5091 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "DAVE COLLINS",
      "title": "Cleanup begins as spring nor'easter moves on. But hundreds of thousands still lack power - The Associated Press",
      "description": "Snow showers are lingering as the cleanup begins following a major spring storm that brought heavy snow, rain and high winds to the Northeast. Hundreds of thousands of homes and businesses are still without power in Maine and New Hampshire. Well over a foot o…",
      "url": "https://apnews.com/article/snow-new-england-winter-storm-c7de82552c5f131eb315be704013b87d",
      "urlToImage": "https://dims.apnews.com/dims4/default/b7fbd2b/2147483647/strip/true/crop/4032x2268+0+210/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Faa%2Fc1%2F6fa0854801c2edfcc259f4fae40f%2Fb347c3feafc44d78a269bddc3143a9f1",
      "publishedAt": "2024-04-05T11:50:00Z",
      "content": "Snow showers lingered Friday as the cleanup began following a major spring storm that brought heavy snow, rain and high winds to the Northeast, left hundreds of thousands of homes and businesses with… [+3769 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Fox Business"
      },
      "author": "Aislinn Murphy",
      "title": "Solar eclipse: the prime watching spots are along the 'path of totality' - Fox Business",
      "description": "There is a solar eclipse happening on Monday, and many people have hopes of witnessing the rare phenomenon for themselves. The path of totality will offer prime spots for seeing the total eclipse.",
      "url": "https://www.foxbusiness.com/lifestyle/solar-eclipse-prime-watching-spots-along-path-of-totality",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/04/0/0/eclipse-viewers.jpg?ve=1&tl=1",
      "publishedAt": "2024-04-05T11:00:00Z",
      "content": "There is a solar eclipse happening on Monday, and many people have hopes of witnessing the rare phenomenon for themselves. \r\nThe total solar eclipse, when the moon entirely hides the sun, will only b… [+4159 chars]"
    }
  ]
  handlePreviousClick = async ()=>{
    console.log("previous")
    console.log("next")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=176855dda6fe4a51a03caf5b644d2db2&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    {this.setState({loading:true})}
    let data = await fetch(url);
    let parseData= await data.json()
    console.log(parseData);
    this.setState({
      page: this.state.page-1,
      articles: parseData.articles,
      loading : false
    })
 
    
  }


  handleNextClick = async ()=>{
    console.log("next");
    if(!(this.state.page +1 > Math.ceil (this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=176855dda6fe4a51a03caf5b644d2db2&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    {this.setState({loading:true})}
    let data = await fetch(url);
    let parseData= await data.json()
    this.setState({
      page: this.state.page+1,
      articles: parseData.articles,
      loading: false
    })}
  }

  constructor() {
    super()
    console.log("Hello I am a constructor from News component");
    this.state ={
        articles : this.articles,
        loading:false,
        page:1
    }
}

async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=176855dda6fe4a51a03caf5b644d2db2&page=1&pageSize=${this.props.pageSize}`;
  {this.setState({loading:true})}
  let data = await fetch(url);
  let parseData= await data.json()
  console.log(parseData);
  this.setState({articles: parseData.articles,
    totalResults: parseData.totalResults,
    loading:false})


}
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Daily News  - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        {this.state.articles.map((element)=>{console.log(element)})}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,40): " "} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage} newsUrl = {element.url}/>
          </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={(this.state.page +1 > Math.ceil (this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button></div>
      </div>
    )
  }
}

export default News
