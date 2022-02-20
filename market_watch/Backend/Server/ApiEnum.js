
let FundamentalEnum= Array();

module.exports.FundamentalEnum= function (){
  
   return({
    USA:[
        ['retail_sales','https://www.econdb.com/api/series/URATEUS/?format=json'],
        ['core_retail_sales','https://www.econdb.com/api/series/URATEUS/?format=json'],
        ['umichigan_consumer_sentiment','https://www.econdb.com/api/series/URATEUS/?format=json'],
        ['cbconsumer_confidence','https://www.econdb.com/api/series/URATEUS/?format=json'],
        ['ussentiment_imf','https://www.econdb.com/api/series/SENTUS/?format=json'],
        ['real_gdp','https://www.econdb.com/api/series/RGDPUS/?format=json'],
        ['gdp','https://www.econdb.com/api/series/GDPUS/?format=json'],
        ['cpi','https://www.econdb.com/api/series/CPIUS/?format=json'],
        ['total_employment','https://www.econdb.com/api/series/EMPUS/?format=json'],
        ['active_population','https://www.econdb.com/api/series/ACPOPUS/?format=json'],
        ['employment_population_ratio','https://www.econdb.com/api/series/EMRATIOUS/?format=json'],
        ['unemployment','https://www.econdb.com/api/series/URATEUS/?format=json'],
        ['industrial_production','https://www.econdb.com/api/series/IPUS/?format=json'],
        ['government_blance','https://www.econdb.com/api/series/GBALUS/?format=json'],
        ['government_revenue','https://www.econdb.com/api/series/GREVUS/?format=json'],
        ['government_expenditure','https://www.econdb.com/api/series/GSPEUS/?format=json'],
        ['Treasury_3_month','https://www.econdb.com/api/series/M3YDUS/?format=json']
    
        ],
    JP:[
      ['Treasury_3_month','https://www.econdb.com/api/series/M3YDUS/?format=json']
     ],
CA:[['industrial_production','https://www.econdb.com/api/series/M3YDUS/?format=json']],
AU:[['active_population','https://www.econdb.com/api/series/M3YDUS/?format=json']],
GB:[['government_expenditure','https://www.econdb.com/api/series/M3YDUS/?format=json']]
 
   })

}

