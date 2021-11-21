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
    public class PieChartDataController : ControllerBase
    {
        IConfiguration _configuration;
        public PieChartDataController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public PieChartData Get()
        {
            MySqlDataReader rd = null;
            PieChartData obj = new PieChartData();
            using (MySqlConnection conn = new MySqlConnection(this._configuration.GetConnectionString("DefaultConnection")))
            {
                MySqlCommand cmd = new MySqlCommand("Select * from PieChartData", conn);
                conn.Open();
                rd = cmd.ExecuteReader();
                while (rd.Read())
                {
                    obj.Data1 = Convert.ToInt32(rd.GetValue(1));
                    obj.Data2 = Convert.ToInt32(rd.GetValue(2));
                    obj.Data3 = Convert.ToInt32(rd.GetValue(3));
                }
                conn.Close();
            }

            return obj;
        }
    }
}
