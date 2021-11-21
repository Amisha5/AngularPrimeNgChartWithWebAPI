using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using PrimeNgCharts.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrimeNgCharts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BarChartDataController : ControllerBase
    {
        IConfiguration _configuration;
        public BarChartDataController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public List<BarChartData> Get()
        {
            MySqlDataReader rd = null;
            List<BarChartData> barCh = new List<BarChartData>();
            BarChartData obj = new BarChartData();
            using (MySqlConnection conn = new MySqlConnection(this._configuration.GetConnectionString("DefaultConnection")))
            {
                BarChartData br = null;
                MySqlCommand cmd = new MySqlCommand("Select * from BarChartData", conn);
                conn.Open();
                rd = cmd.ExecuteReader();
                while (rd.Read())
                {
                    br = new BarChartData();
                    br.severityCount = Convert.ToInt32(rd.GetValue(1));
                    br.severity = Convert.ToString(rd.GetValue(2));
                    barCh.Add(br);
                }
                conn.Close();
            }

            return barCh;
        }
    }
}
