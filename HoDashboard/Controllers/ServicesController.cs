using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;

namespace HoDashboard.Controllers
{
    public class ServicesController : ApiController
    {

         public struct  Gaugeoptions
         {
             public int Width;
             public int Height;
             public int RedFrom;
             public int RedTo;
             public int YellowFrom;
             public int YellowTo;
             public int GreenFrom;
             public int GreenTo;
             public int Max;
             public int MinorTicks;
              
         }

         public class ResponceGaugeData
         {
             public Gaugeoptions GaugeOptions;
             public string Label;
             public int Value;
             public string Header;
             public string Footer;

         }

        
        public struct PieOptions
        {
            public int Width;
            public int Height;
            public string title;
            public double pieHole;
        }
        public class ResponcePieData
        {
            public PieOptions Pieoptions;
            public Cell[] ArrayData;

        }
        public struct  Cell
        {
            public string Info1;
            public int Info2;
        }

        public HttpResponseMessage GaugeData(JObject jsonData)
        {
            try
            {


                dynamic json = jsonData;

                string sid = json.Id;
                var id = Convert.ToInt32(sid);
               
                var rnd = new Random();

                ResponceGaugeData responceInfo;

                switch (id)
                {
                    case 0:
                        responceInfo = new ResponceGaugeData
                        {

                            GaugeOptions = new Gaugeoptions
                            {
                                GreenFrom = 800,
                                GreenTo = 1000,
                                Max = 1000,
                                MinorTicks = 5,
                                RedFrom = 0,
                                RedTo = 500,
                                YellowFrom = 500,
                                YellowTo = 800,
                                Width = 0,
                                Height = 0,
                            },
                            Header = "כלל הרשת",
                            Footer = DateTime.UtcNow.AddHours(2).ToString("HH:mm:ss"),
                            Label = "פדיון",
                            Value = rnd.Next(1, 1001)
                        };
                        break;
                    case 1:
                        responceInfo = new ResponceGaugeData
                        {

                            GaugeOptions = new Gaugeoptions
                            {
                                GreenFrom = 80,
                                GreenTo = 100,
                                Max = 100,
                                MinorTicks = 5,
                                RedFrom = 0,
                                RedTo = 50,
                                YellowFrom = 50,
                                YellowTo = 80,
                                Width = 0,
                                Height = 0,
                            },
                            Header = "רננים",
                            Footer = DateTime.UtcNow.AddHours(2).ToString("HH:mm:ss"),
                            Label = "פדיון",
                            Value = rnd.Next(1, 101)
                        };
                        break;

                    case 2:
                        responceInfo = new ResponceGaugeData
                        {

                            GaugeOptions = new Gaugeoptions
                            {
                                GreenFrom = 30,
                                GreenTo = 50,
                                Max = 50,
                                MinorTicks = 5,
                                RedFrom = 0,
                                RedTo = 20,
                                YellowFrom = 20,
                                YellowTo = 30,
                                Width = 0,
                                Height = 0,
                            },
                            Header = "חשמונאים",
                            Footer = DateTime.UtcNow.AddHours(2).ToString("HH:mm:ss"),
                            Label = "פדיון",
                            Value = rnd.Next(1, 51)
                        };
                        break;
                    case 3:
                        responceInfo = new ResponceGaugeData
                        {

                            GaugeOptions = new Gaugeoptions
                            {
                                GreenFrom = 60,
                                GreenTo =100,
                                Max = 100,
                                MinorTicks = 5,
                                RedFrom = 0,
                                RedTo = 40,
                                YellowFrom = 40,
                                YellowTo = 60,
                                Width = 0,
                                Height = 0,
                            },
                            Header = "חיפה",
                            Footer = DateTime.UtcNow.AddHours(2).ToString("HH:mm:ss"),
                            Label = "פדיון",
                            Value = rnd.Next(1, 101)
                        };
                        break;
                    case 4:
                        responceInfo = new ResponceGaugeData
                        {

                            GaugeOptions = new Gaugeoptions
                            {
                                GreenFrom = 60,
                                GreenTo = 100,
                                Max = 100,
                                MinorTicks = 5,
                                RedFrom = 0,
                                RedTo = 40,
                                YellowFrom = 40,
                                YellowTo = 60,
                                Width = 0,
                                Height = 0,
                            },
                            Header = "אמירים",
                            Footer = DateTime.UtcNow.AddHours(2).ToString("HH:mm:ss"),
                            Label = "פדיון",
                            Value = rnd.Next(1, 101)
                        };
                        break;
                    case 5:
                        responceInfo = new ResponceGaugeData
                        {

                            GaugeOptions = new Gaugeoptions
                            {
                                GreenFrom = 60,
                                GreenTo = 100,
                                Max = 100,
                                MinorTicks = 5,
                                RedFrom = 0,
                                RedTo = 40,
                                YellowFrom = 40,
                                YellowTo = 60,
                                Width = 0,
                                Height = 0,
                            },
                            Header = "שפירים",
                            Footer = DateTime.UtcNow.AddHours(2).ToString("HH:mm:ss"),
                            Label = "פדיון",
                            Value = rnd.Next(1, 101)
                        };
                        break;
                    default:
                         responceInfo = new ResponceGaugeData
                        {

                            GaugeOptions = new Gaugeoptions
                            {
                                GreenFrom = 120,
                                GreenTo =200,
                                Max = 200,
                                MinorTicks = 5,
                                RedFrom = 0,
                                RedTo = 80,
                                YellowFrom = 80,
                                YellowTo = 120,
                                Width = 0,
                                Height = 0,
                            },
                            Header = "זבוטינסקי",
                            Footer = DateTime.UtcNow.AddHours(2).ToString("HH:mm:ss"),
                            Label = "פדיון",
                            Value = rnd.Next(1, 201)
                        };
                        break;


                }

                

                var httpresponse = Request.CreateResponse(HttpStatusCode.Created, responceInfo);
                httpresponse.Headers.Location = new Uri(Request.RequestUri,
                                                        string.Format("GaugeData/{0}", responceInfo.GaugeOptions.Max));
                return httpresponse;

            }
            catch (Exception e)
            {
                var httpresponse = Request.CreateResponse(HttpStatusCode.ExpectationFailed, 0);
                httpresponse.Headers.Location = new Uri(Request.RequestUri,
                                                        string.Format(e.Message, 0));
                return httpresponse;
            }
        }

        public HttpResponseMessage PieData(JObject jsonData)
        {
            try
            {


                dynamic json = jsonData;

                string sid = json.Id;
                var id = Convert.ToInt32(sid);
                var rnd = new Random();

                ResponcePieData responceInfo;

                switch (id)
                {
                    case 0:

                        responceInfo = new ResponcePieData
                        {
                            ArrayData = new[] { new Cell{Info1 = "אשראי",Info2 =  rnd.Next(1, 10)}, 
                                                     new Cell{Info1 = "מזומן",Info2 =  rnd.Next(1, 30)},
                                                     new Cell{Info1 = "תווים",Info2 =  rnd.Next(1, 40)},
                                                     new Cell{Info1 = "צקים",Info2 =  rnd.Next(1, 50)}
                            },
                            Pieoptions = new PieOptions{title = "אמצעי תשלום",
                                                        pieHole = 0.2
                        }};
                        break;
                    //case 1:
                    //    break;

                    //case 2:
                    //    break;
                    //case 3:
                    //    break;
                    default:
                        responceInfo = new ResponcePieData
                        {
                            ArrayData = new[] { new Cell{Info1 = "אשראי",Info2 =  rnd.Next(1, 10)}, 
                                                     new Cell{Info1 = "מזומן",Info2 =  rnd.Next(1, 30)},
                                                     new Cell{Info1 = "תווים",Info2 =  rnd.Next(1, 40)},
                                                     new Cell{Info1 = "צקים",Info2 =  rnd.Next(1, 50)}
                            },
                            Pieoptions = new PieOptions
                            {
                                Height = 100,
                                title = "אמצעי תשלום",
                                pieHole = 0.2
                            }
                        };

                        break;


                }



                var httpresponse = Request.CreateResponse(HttpStatusCode.Created, responceInfo);
                httpresponse.Headers.Location = new Uri(Request.RequestUri,           //TODO what to send?
                                                        string.Format("PieData/{0}", responceInfo.Pieoptions.Height));
                return httpresponse;

            }
            catch (Exception e)
            {
                var httpresponse = Request.CreateResponse(HttpStatusCode.ExpectationFailed, 0);
                httpresponse.Headers.Location = new Uri(Request.RequestUri,
                                                        string.Format(e.Message, 0));
                return httpresponse;
            }
        }


        public struct ColumnOptions
        {
            public int Width;
            public int Height;
           
        }
        public class ResponceColumnData
        {
            public ColumnOptions Columnoptions;
            public Cell2[] ArrayData;
            public string[] legend;

        }
        public struct Cell2
        {
            public string Info1;
            public int I1;
            public int I2;
            public int I3;
        }

        public HttpResponseMessage ColumnData(JObject jsonData)
        {
            try
            {


                dynamic json = jsonData;

                string sid = json.Id;
                var id = Convert.ToInt32(sid);
                var rnd = new Random();

                ResponceColumnData responceInfo;

                switch (id)
                {
                    case 0:

                         
                        responceInfo = new ResponceColumnData
                        {
                            ArrayData = new[] { new Cell2{Info1 = "הזמנות",I1 =  rnd.Next(1, 100),I2 =  rnd.Next(1, 80),I3 =  rnd.Next(1, 120)}, 
                                                 new   Cell2{Info1 = "תעודות",I1 =  rnd.Next(1, 100),I2 =  rnd.Next(1, 80),I3 =  rnd.Next(1, 120)},
                                                 new   Cell2{Info1 = "משלוח", I1 =  rnd.Next(1, 100),I2 =  rnd.Next(1, 80),I3 =  rnd.Next(1, 120)},
                                                 new   Cell2{Info1 = "הזמנות",I1 =  rnd.Next(1, 100),I2 =  rnd.Next(1, 80),I3 =  rnd.Next(1, 120)}
                            },
                            legend = new []{"aaa","בוצע","צפי","פתוח"},
                            Columnoptions = new ColumnOptions{Width= 200,
                                                              Height = 100
                        }};
                        break;
                    //case 1:
                    ////    break;

                    //case 2:
                    //    break;
                    //case 3:
                    //    break;
                    default:

                        responceInfo = new ResponceColumnData
                        {
                            ArrayData = new[] { new Cell2{Info1 = "הזמנות",I1 =  rnd.Next(1, 100),I2 =  rnd.Next(1, 80),I3 =  rnd.Next(1, 120)}, 
                                                 new   Cell2{Info1 = "תעודות",I1 =  rnd.Next(1, 100),I2 =  rnd.Next(1, 80),I3 =  rnd.Next(1, 120)},
                                                 new   Cell2{Info1 = "משלוח", I1 =  rnd.Next(1, 100),I2 =  rnd.Next(1, 80),I3 =  rnd.Next(1, 120)},
                                                 new   Cell2{Info1 = "הזמנות",I1 =  rnd.Next(1, 100),I2 =  rnd.Next(1, 80),I3 =  rnd.Next(1, 120)}
                            },
                            legend = new [] { "aaa", "בוצע", "צפי", "פתוח" },
                            Columnoptions = new ColumnOptions
                            {
                                Width = 200,
                                Height = 100
                            }
                        };

                        break;


                }



                var httpresponse = Request.CreateResponse(HttpStatusCode.Created, responceInfo);
                httpresponse.Headers.Location = new Uri(Request.RequestUri,           //TODO what to send?
                                                        string.Format("ColumnData/{0}", responceInfo.Columnoptions.Height));
                return httpresponse;

            }
            catch (Exception e)
            {
                var httpresponse = Request.CreateResponse(HttpStatusCode.ExpectationFailed, 0);
                httpresponse.Headers.Location = new Uri(Request.RequestUri,
                                                        string.Format(e.Message, 0));
                return httpresponse;
            }
        }

        

    }
}
