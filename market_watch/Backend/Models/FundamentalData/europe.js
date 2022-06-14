const redis = require('redis');
const client = redis.createClient();
const axios = require('axios');
const router = require('express').Router();

const retail_sales =axios.get('https://www.econdb.com/api/series/RETAEU/?format=json');
const consumer_confidence =axios.get('https://www.econdb.com/api/series/CONFEU/?format=json');
const construction_production =axios.get('https://www.econdb.com/api/series/CPEU/?format=json');
const housing_price =axios.get('https://www.econdb.com/api/series/HOUEU/?format=json');
const real_gdp =axios.get('https://www.econdb.com/api/series/RGDPEU/?format=json');
const gdp =axios.get('https://www.econdb.com/api/series/GDPEU/?format=json');
const core_cpi =axios.get('https://www.econdb.com/api/series/COREEU/?format=json');
const _export =axios.get('https://www.econdb.com/api/series/EXPEU/?format=json');
const _import =axios.get('https://www.econdb.com/api/series/IMPEU/?format=json');
const real_export =axios.get('https://www.econdb.com/api/series/REXPEU/?format=json');
const real_import =axios.get('https://www.econdb.com/api/series/RIMPEU/?format=json');
const real_public_consumption =axios.get('https://www.econdb.com/api/series/RPUCEU/?format=json');
const real_private_consumption =axios.get('https://www.econdb.com/api/series/RPRCEU/?format=json');
const public_consumption =axios.get('https://www.econdb.com/api/series/PUCEU/?format=json');
const private_consumption =axios.get('https://www.econdb.com/api/series/PRCEU/?format=json');
const cpi =axios.get('https://www.econdb.com/api/series/CPIUS/?format=json');
const producer_price_index =axios.get('https://www.econdb.com/api/series/PPIEU/?format=json');
const unemployment = axios.get('https://www.econdb.com/api/series/URATEEU/?format=json');
const industrial_production = axios.get('https://www.econdb.com/api/series/IPEU/?format=json');
const government_blance = axios.get('https://www.econdb.com/api/series/GBALEU/?format=json');
const government_debt =axios.get('https://www.econdb.com/api/series/GDEBTEU/?format=json');
const government_expenditure =axios.get( 'https://www.econdb.com/api/series/GSPEUS/?format=json');
const Treasury_10_year = axios.get('https://www.econdb.com/api/series/Y10YDEU/?format=json');




  //await client.connect().then
  

    

    try{
        router.route('/').get((req, res) => {
            client.get('USA_cpi', (data, err)=>{
                if (err) {
                    console.error(err);
                }
        if(data){
            res.json(data)
        }else{

            axios.all([retail_sales,consumer_confidence,construction_production 
               ,real_gdp, gdp, cpi,housing_price,core_cpi,real_export,real_import,real_public_consumption,
               producer_price_index,
               real_private_consumption,unemployment,industrial_production,government_debt,government_blance,
                government_expenditure,Treasury_10_year
                ])
   .then(
     axios.spread((...responses) => {
       const retail = responses[0];
       const consumer_conf= responses[1];
       const const_production = responses[2];
       const r_gdp = responses[3];
       const gdp = responses[4];
       const _cpi = responses[5];
       const housing_price = responses[6];
       const c_cpi = responses[7];
       const r_export = responses[8];
       const r_import = responses[9];
       const r_public_consumption = responses[10];
       const ppi= responses[11];
       const r_private_consumption = responses[12];
       const un_employment= responses[13];
       const ind_production = responses[14];
       const govt_debt = responses[15];
       const govt_balance= responses[16];
       const tenYearTreasury= responses[17];
 
       //client.connect()
       const rt_sales = getCurAndPre(retail)
       const cons_confidence = getCurAndPre(consumer_conf)
       const construction_prod = getCurAndPre(const_production)
       const h_price = getCurAndPre(housing_price)
       const co_cpi = getCurAndPre(c_cpi)
       const realGdp = getCurAndPre(r_gdp)
       const GDP = getCurAndPre(gdp)
       const consumerPriceIndex = getCurAndPre(_cpi)
       const realExport = getCurAndPre(r_export)
       const realImport = getCurAndPre(r_import)
       const realPrivateConsumption = getCurAndPre(r_private_consumption)
       const realPublicConsumption = getCurAndPre(r_public_consumption)
       const unEmployment = getCurAndPre(un_employment)
       const IndustrialProduction = getCurAndPre(ind_production)
       const producersPriceIndex = getCurAndPre(ppi)
       const govtDebt = getCurAndPre(govt_debt)
       const govtBalance = getCurAndPre(govt_balance)
       const tenYeasTS = getCurAndPre(tenYearTreasury)
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

      const rData = [[['EU_retail_sales'],[JSON.stringify(rt_sales)]],
       [['EU_consumer_confidence'],[JSON.stringify(cons_confidence)]],
       [['EU_construction_production'],[JSON.stringify(construction_prod)]],
       [['EU_housing_price'],[JSON.stringify(h_price)]],
       [['EU_core_cpi'],[JSON.stringify(co_cpi)]],
       [['EU_real_export'],[JSON.stringify(realExport)]],
       [['USA_realGdp'],[JSON.stringify(realGdp)]],
       [['USA_Gdp'],[JSON.stringify(GDP)]],
       [['USA_cpi'],[JSON.stringify(consumerPriceIndex)]],
       [['EU_real_import'],[JSON.stringify(realImport)]],
       [['EU_real_private_consumption'],[JSON.stringify(realPrivateConsumption )]],
       [['EU_real_public_consumption'],[JSON.stringify(realPublicConsumption )]],
       [['EU_unEmployment'],[JSON.stringify(unEmployment)]],
       [['EU_industrial_production'],[JSON.stringify(IndustrialProduction)]],
       [['EU_govt_debt'],[JSON.stringify(govtDebt)]],
       [['EU_govt_balance'],[JSON.stringify(govtBalance)]],
       [['EU_producers_price_index'],[JSON.stringify(producersPriceIndex)]],
       [['EU_ten_year_treasury'],[JSON.stringify(tenYeasTS)]]
    ];

        client.setex('european_union', 3600, JSON.stringify(rData))

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
    


