const redis = require('redis');
const client = redis.createClient();
const axios = require('axios');
const router = require('express').Router();


const retail_sales =axios.get('https://www.econdb.com/api/series/RETAUS/?format=json');
const core_retail_sales =axios.get('https://www.econdb.com/api/series/URATEUS/?format=json');


const umichigan_consumer_sentiment = axios.get( 'https://www.econdb.com/api/series/URATEUS/?format=json');
const cbconsumer_confidence = axios.get('https://www.econdb.com/api/series/URATEUS/?format=json');
const ussentiment_imf = axios.get('https://www.econdb.com/api/series/SENTUS/?format=json');
const real_gdp = axios.get('https://www.econdb.com/api/series/RGDPUS/?format=json');
const gdp = axios.get('https://www.econdb.com/api/series/GDPUS/?format=json');


const cpi = axios.get('https://www.econdb.com/api/series/CPIUS/?format=json');
const total_employment = axios.get('https://www.econdb.com/api/series/EMPUS/?format=json');
const active_population = axios.get('https://www.econdb.com/api/series/ACPOPUS/?format=json');
const employment_population_ratio = axios.get('https://www.econdb.com/api/series/EMRATIOUS/?format=json');
const unemployment = axios.get('https://www.econdb.com/api/series/URATEUS/?format=json');


const industrial_production = axios.get('https://www.econdb.com/api/series/IPUS/?format=json');
const government_blance = axios.get('https://www.econdb.com/api/series/GBALUS/?format=json');
const government_revenue = axios.get('https://www.econdb.com/api/series/GREVUS/?format=json');
const government_expenditure = axios.get( 'https://www.econdb.com/api/series/GSPEUS/?format=json');
const Treasury_3_month = axios.get('https://www.econdb.com/api/series/M3YDUS/?format=json');


//await client.connect().then 
 try{
        router.route('/').get((req, res) => {
            client.get('united_states', (data, err)=>{

                if (err) {
                    console.error(err);
                    
                }

        if(data){

            res.json(data)
            //const output = JSON.parse(data);

            //console.log('...........from Redis ..............')
            //const eff = getCurAndPre(output)
            //console.log(output)
      
        }else{
            axios.all([retail_sales, core_retail_sales, umichigan_consumer_sentiment,
                cbconsumer_confidence,ussentiment_imf,real_gdp, gdp, cpi,
                total_employment, active_population,employment_population_ratio,
                unemployment,industrial_production,government_revenue,government_blance,
                government_expenditure,Treasury_3_month ])
   .then(
     axios.spread((...responses) => {
       
       const retail = responses[0];
       const c_retail_sales = responses[1];
       const michigan_sentiment = responses[2];
       const cb_sentiment = responses[3];
       const imf_sentiment = responses[4];
       const r_gdp = responses[5];
       const gdp = responses[6];
       const cpi = responses[7];
       const ttl_employment = responses[8];
       const active_ppl = responses[9];
       const employment_ppl_ratio = responses[10];
       const un_employment= responses[11];
       const indust_prod = responses[12];
       const gov_rev= responses[13];
       const gov_bal = responses[14];
       const gov_exp = responses[15];
       const three_month_ts= responses[16];
       //client.connect()
       const rt_sales = getCurAndPre(retail)
       const c_rt_sales = getCurAndPre(c_retail_sales)
       const cbtSentiment = getCurAndPre(cb_sentiment)
       const michSentiment = getCurAndPre(michigan_sentiment)
       const imfSentiment = getCurAndPre(imf_sentiment)
       const realGdp = getCurAndPre(r_gdp)
       const GDP = getCurAndPre(gdp)
       const consumerPriceIndex = getCurAndPre(cpi)
       const totalEmployment = getCurAndPre(ttl_employment)
       const activePopulation = getCurAndPre(active_ppl)
       const employmentPopulationRatio = getCurAndPre(employment_ppl_ratio)
       const unEmployment = getCurAndPre(un_employment)
       const IndustrialProduction = getCurAndPre(indust_prod)
       const govtRevenue = getCurAndPre(gov_rev)
       const govtBalance = getCurAndPre(gov_bal)
       const govtExpenditure = getCurAndPre(gov_exp)
       const threeMonthTreasury = getCurAndPre(three_month_ts)

 /* 
        client.setex('USA_retail_sales', 3600, JSON.stringify(rt_sales))
        client.setex('USA_core_retail_sales', 3600, JSON.stringify(c_rt_sales))
        client.setex('USA_cbSentiment', 3600, JSON.stringify(cbtSentiment))
        client.setex('USA_michSentiment', 3600, JSON.stringify(michSentiment))
        client.setex('USA_imfSentiment', 3600, JSON.stringify(imfSentiment))
        client.setex('USA_realGdp', 3600, JSON.stringify(realGdp))
        client.setex('USA_Gdp', 3600, JSON.stringify(GDP))
        client.setex('USA_cpi', 3600, JSON.stringify(consumerPriceIndex))
        client.setex('USA_total_employment', 3600, JSON.stringify(totalEmployment))
        client.setex('USA_active_population', 3600, JSON.stringify(activePopulation))
        client.setex('USA_employmentPopulationRatio', 3600, JSON.stringify(employmentPopulationRatio))
        client.setex('USA_unEmployment', 3600, JSON.stringify(unEmployment))
        client.setex('USA_industrialProduction', 3600, JSON.stringify(IndustrialProduction))
        client.setex('USA_govtRevenue', 3600, JSON.stringify(govtRevenue))
        client.setex('USA_govtBalance', 3600, JSON.stringify(govtBalance))
        client.setex('USA_govtExpenditure', 3600, JSON.stringify(govtExpenditure))
        client.setex('USA_threeMonthTreasury', 3600, JSON.stringify(threeMonthTreasury)) */
       //client.get('USA_retail_sales')       
       // use/access the results

      const rData = [[['USA_retail_sales'],[JSON.stringify(rt_sales)]],
       [['USA_core_retail_sales'],[JSON.stringify(c_rt_sales)]],
       [['USA_cbSentiment'],[JSON.stringify(cbtSentiment)]],
       [['USA_michSentiment'],[JSON.stringify(michSentiment)]],
       [['USA_imfSentiment'],[JSON.stringify(imfSentiment)]],
       [['USA_realGdp'],[JSON.stringify(realGdp)]],
       [['USA_Gdp'],[JSON.stringify(GDP)]],
       [['USA_cpi'],[JSON.stringify(consumerPriceIndex)]],
       [['USA_total_employment'],[JSON.stringify(totalEmployment)]],
       [['USA_active_population'],[JSON.stringify(activePopulation)]],
       [['USA_employmentPopulationRatio'],[JSON.stringify(employmentPopulationRatio)]],
       [['USA_unEmployment'],[JSON.stringify(unEmployment)]],
       [['USA_industrialProduction'],[JSON.stringify(IndustrialProduction)]],
       [['USA_govtRevenue'],[JSON.stringify(govtRevenue)]],
       [['USA_govtBalance'],[JSON.stringify(govtBalance)]],
       [['USA_govtExpenditure'],[JSON.stringify(govtExpenditure)]],
       [['USA_threeMonthTreasury'],[JSON.stringify(threeMonthTreasury)]]
    ];

        client.setex('united_states', 3600, JSON.stringify(rData))

        res.json(rData)

       
     })
     )
     .catch(errors => {
         // react on errors.
         console.error(errors);
     });

        }
    })
})
    }catch(err){

        console.error(err)

    }



 function getCurAndPre (data){

     console.log('..............inside...........')

     const values = data.data.data.values
     const dates = data.data.data.dates
     const desc = data.data.description

     //console.log(data.data.data.values[values.length-1])
   
    const curr = values[values.length-1]
    const prev = values[values.length-2]
    const ldate = dates[values.length-1]

    const res  =  [[desc],[curr],[prev],[ldate]]
    //console.log(res)
    return res

    
 }

 module.exports = router;
    


