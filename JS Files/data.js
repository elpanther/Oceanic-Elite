const tBody = document.getElementById("T_Body")
const eachElement = document.getElementById("info")


const data = [
    {
    Facility_Name: "William State Service Center",
    Latitude: "39.15377",
    Langitude: "-75.51436",
    Type:"Food Pantry",
    County:"Kent",
    City:"Dover",
    Address: "805 River Road",  
    Phone_number: "(302) 857-5000",
    Requirements: "call (302) 857-5000",
    Additional_info: "",
    Hours: [
        {Monday: "",
         Tuesday: "",
         Wednesday:"",
         Thursday:"",
         Friday: "",
         Saturday: "",
         Sunday: ""
        }
        
    ]
    },
    {
        Facility_Name: "Southside Baptist Church",
        Latitude: "39.08796",
        Langitude: "-75.55185",
        Type:"Food Pantry",
        County:"Kent",
        City:"Dover",
        Address : "4904 South Dupont Highway",  
        Phone_number: "(302) 697-2411",
        Requirements: "call (302) 697-2411",
        Additional_info: "",
        Hours: [
            {Monday: "",
             Tuesday: "",
             Wednesday:"",
             Thursday:"",
             Friday: "",
             Saturday: "",
             Sunday: ""
            }
            
        ]
        },
        {
            Facility_Name: "Catholic Charities Basic Needs Program ",
            Latitude: "39.12075",
            Langitude: "-75.53319",
            Type:"Food Pantry",
            County:"Kent",
            City:"Dover",
            Address : "2099 South Dupont Highway",  
            Phone_number: "(302) 674-1600",
            Requirements: "Proof of income and monthly expenses",
            Additional_info: "call (302) 674-1600",
            Hours: [
                {Monday: "",
                 Tuesday: "",
                 Wednesday:"",
                 Thursday:"",
                 Friday: "",
                 Saturday: "",
                 Sunday: ""
                }
                
            ]
            },
            {
                Facility_Name: "Goodwill Industries, Food Closet",
                Latitude: "39.12772",
                Langitude: "-75.531",
                Type:"Food Pantry",
                County:"Kent",
                City:"Dover",
                Address : "1678 South Governors Avenue",  
                Phone_number: "(302) 674-9071",
                Requirements: "One photo ID is required of head of household",
                Additional_info: "call (302) 674-9071",
                Hours: [
                    {Monday: "",
                     Tuesday: "",
                     Wednesday:"",
                     Thursday:"",
                     Friday: "",
                     Saturday: "",
                     Sunday: ""
                    }
                    
                ]
                },
                {
                    Facility_Name: "Calvary Assembly of God Food Closet",
                    Latitude: "39.11842",
                    Langitude: "-75.51416",
                    Type:"Food Pantry",
                    County:"Kent",
                    City:"Dover",
                    Address: "1141 East Lebanon Road",  
                    Phone_number: "(302) 697-7776",
                    Requirements: "referrals from The James Williams State Service Center only every Friday",
                    Additional_info: "call (302) 697-7776",
                    Hours: [
                        {Monday: "",
                         Tuesday: "",
                         Wednesday:"",
                         Thursday:"",
                         Friday: "",
                         Saturday: "",
                         Sunday: ""
                        }
                        
                    ]
                    },
                    {
                        Facility_Name: "Kent County Community Action",
                        Latitude: "39.140563",
                        Langitude: "-75.5257",
                        Type:"Food Pantry",
                        County:"Kent",
                        City:"Dover",
                        Address: "1120 South Governors Avenue",  
                        Phone_number: "(302) 678-1949",
                        Requirements: "call (302) 678-1949",
                        Additional_info: "",
                        Hours: [
                            {Monday: "12:00am - 2:00pm",
                             Tuesday: "12:00am - 2:00pm",
                             Wednesday:"12:00am - 2:00pm",
                            Thursday:"12:00am - 2:00pm",
                             Friday: "12:00am - 2:00pm",
                             Saturday: "",
                             Sunday: ""
                            }
                            
                        ]
                        },
                        {
                            Facility_Name: "Food Bank of Delaware Milford Facility",
                            Latitude: "38.92794",
                            Langitude: "-75.44661",
                            Type:"Food Bank",
                            County:"Kent",
                            City:"Milford",
                            Address : "1040 Mattlind Way",  
                            Phone_number: "(302) 424-3301",
                            Requirements: "call (302) 424-3301",
                            Additional_info: "",
                            Hours: [
                                {Monday: "8:00am - 3:00pm",
                                 Tuesday: "8:00am - 3:00pm",
                                 Wednesday:"8:00am - 3:00pm",
                                 Thursday:"8:00am - 3:00pm",
                                 Friday: "8:00am - 3:00pm",
                                 Saturday: "",
                                 Sunday: ""
                                }
                                
                            ]
                            },
                            {
                                Facility_Name: "Union United Methodist Church",
                                Latitude: "39.65045",
                                Langitude: "-75.64497",
                                Type:"Food Pantry",
                                County:"New Castle",
                                City:"Bear",
                                Address: "345 School Bell Road",  
                                Phone_number: "(302) 322-3118",
                                Requirements: "By appointment call (302) 322-3118",
                                Additional_info: "",
                                Hours: [
                                    {Monday: "",
                                    Tuesday: "",
                                    Wednesday:"",
                                    Thursday:"",
                                    Friday: "",
                                    Saturday: "",
                                    Sunday: ""
                                    }
                                    
                                ]
                                },
                                {
                                    Facility_Name: "Alpha Worship Center Pantry of Hope",
                                    Latitude: "39.64408",
                                    Langitude: "-75.63596",
                                    Type:"Food Pantry",
                                    County:"New Castle",
                                    City:"Bear",
                                    Address: "2020 Firedancer Lane",  
                                    Phone_number: "(302) 325-3930",
                                    Requirements: "call (302) 325-3930",
                                    Additional_info: "",
                                    Hours: [
                                        {Monday: "",
                                         Tuesday: "",
                                         Wednesday:"",
                                         Thursday:"",
                                         Friday: "",
                                         Saturday: "",
                                         Sunday: ""
                                        }
                                        
                                    ]
                                    },
                                    {
                                        Facility_Name: "Red Lion Methodist Church",
                                        Latitude: "39.609375",
                                        Langitude: "-75.66935",
                                        Type:"Food Pantry",
                                        County:"New Castle",
                                        City:"Bear",
                                        Address: "1545 Church Road",  
                                        Phone_number: "(302) 834-1599",
                                        Requirements: "Call Ahead about household size (302) 834-1599",
                                        Additional_info: "Only once a month, few times a year",
                                        Hours: [
                                            {Monday: "",
                                             Tuesday: "",
                                             Wednesday:"",
                                             Thursday:"",
                                             Friday: "",
                                             Saturday: "",
                                             Sunday: ""
                                            }
                                            
                                        ]
                                        },
                                        {
                                            Facility_Name: "Neighborhood House ",
                                            Latitude: "39.44833",
                                            Langitude: "-75.72056",
                                            Type:"Food Pantry",
                                            County:"New Castle",
                                            City:"Middletown",
                                            Address: "219 West Green Street",  
                                            Phone_number: "(302) 378-7217",
                                            Requirements: "call (302) 378-7217",
                                            Additional_info: "",
                                            Hours: [
                                                {Monday: "10:00am - 3:30pm",
                                                 Tuesday: "10:00am - 3:30pm",
                                                Wednesday:"10:00am - 3:30pm",
                                                 Thursday:"10:00am - 3:30pm",
                                                 Friday: "10:00am - 3:30pm",
                                                 Saturday: "",
                                                 Sunday: ""
                                                }
                                                
                                            ]
                                            },
                                            {
                                                Facility_Name: "St Anne's Episcopal Church Food Pantry",
                                                Latitude: "39.44902",
                                                Langitude: "-75.71502",
                                                Type:"Food Pantry",
                                                County:"New Castle",
                                                City:"Middletown",
                                                Address: "15 E. Green Street",  
                                                Phone_number: "(302) 378-2401",
                                                Requirements: "call (302) 378-2401",
                                                Additional_info: "2nd Tuesday of the Month",
                                                Hours: [
                                                    {Monday: "",
                                                     Tuesday: "",
                                                     Wednesday:"",
                                                     Thursday:"",
                                                     Friday: "",
                                                     Saturday: "",
                                                     Sunday: ""
                                                    }
                                                    
                                                ]
                                                },
                                                {
                                                    Facility_Name: "Appoquinimink State Service Center",
                                                    Latitude: "39.44924",
                                                    Langitude: "-75.69635",
                                                    Type:"Food Pantry",
                                                    County:"New Castle",
                                                    City:"Middletown",
                                                    Address: "122 Silver Lake Road",  
                                                    Phone_number: "(302) 378-5770",
                                                    Requirements: "call (302) 378-5770",
                                                    Additional_info: "",
                                                    Hours: [
                                                        {Monday: "",
                                                         Tuesday: "",
                                                         Wednesday:"",
                                                         Thursday:"",
                                                         Friday: "",
                                                         Saturday: "",
                                                         Sunday: ""
                                                        }
                                                        
                                                    ]
                                                    },
                                                    {
                                                        Facility_Name: "Hope Lutheran Church",
                                                        Latitude: "39.6634",
                                                        Langitude: "-75.6332",
                                                        Type:"Food Pantry",
                                                        County:"New Castle",
                                                        City:"New Castle",
                                                        Address: "230 Christiana Road",  
                                                        Phone_number: "(302) 328-7909",
                                                        Requirements: "Photo ID",
                                                        Additional_info: "call (302) 328-7909",
                                                        Hours: [
                                                            {Monday: "",
                                                             Tuesday: "",
                                                             Wednesday:"",
                                                             Thursday:"",
                                                             Friday: "",
                                                             Saturday: "",
                                                             Sunday: ""
                                                            }
                                                            
                                                        ]
                                                        },
                                                        {
                                                            Facility_Name: "Victory Christian Fellowship",
                                                            Latitude: "39.65109",
                                                            Langitude: "-75.62389",
                                                            Type:"Food Pantry",
                                                            County:"New Castle",
                                                            City:"New Castle",
                                                            Address: "100 Wilton Blvd #3978",  
                                                            Phone_number: "(302) 324-5400",
                                                            Requirements: "ID, Proof of Residence",
                                                            Additional_info: "call (302) 324-5400 ",
                                                            Hours: [
                                                                {Monday: "",
                                                                 Tuesday: "",
                                                                 Wednesday:"",
                                                                 Thursday:"",
                                                                 Friday: "",
                                                                 Saturday: "",
                                                                 Sunday: ""
                                                                }
                                                                
                                                            ]
                                                            },
                                                            {
                                                                Facility_Name: "Friendship House, Newark Empowerment Center",
                                                                Latitude: "39.6822405",
                                                                Langitude: "-75.7521098",
                                                                Type:"Food Pantry",
                                                                County:"New Castle",
                                                                City:"Newark",
                                                                Address: "69 East Main Street",  
                                                                Phone_number: "(302) 544-0165",
                                                                Requirements: "call (302) 544-0165",
                                                                Additional_info: "",
                                                                Hours: [
                                                                    {Monday: "",
                                                                     Tuesday: "",
                                                                     Wednesday:"",
                                                                     Thursday:"",
                                                                     Friday: "",
                                                                     Saturday: "",
                                                                     Sunday: ""
                                                                    }
                                                                    
                                                                ]
                                                                },
                                                                {
                                                                    Facility_Name: "Society of Saint Vincent De Paul",
                                                                    Latitude: "39.60133",
                                                                    Langitude: "-75.77177",
                                                                    Type:"Food Pantry",
                                                                    County:"New Castle",
                                                                    City:"Newark",
                                                                    Address: "2431 Frazer Road",  
                                                                    Phone_number: "(302) 834-0255",
                                                                    Requirements: "call (302) 834-0255",
                                                                    Additional_info: "",
                                                                    Hours: [
                                                                        {Monday: "9:00am - 4:00pm",
                                                                         Tuesday: "9:00am - 4:00pm",
                                                                         Wednesday:"9:00am - 4:00pm",
                                                                         Thursday:"9:00am - 4:00pm",
                                                                         Friday: "9:00am - 4:00pm",
                                                                        Saturday: "",
                                                                         Sunday: ""
                                                                        }
                                                                        
                                                                    ]
                                                                    },
                                                                    {
                                                                        Facility_Name: "Food Bank of Delaware Newark Facility",
                                                                        Latitude: "39.61355",
                                                                        Langitude: "-75.75445",
                                                                        Type:"Food Bank",
                                                                        County:"New Castle",
                                                                        City:"Newark",
                                                                        Address: "222 Lake Dr",  
                                                                        Phone_number: "(302) 292-1305",
                                                                        Requirements: "call (302) 292-1305",
                                                                        Additional_info: "",
                                                                        Hours: [
                                                                            {Monday: "7:30AM–12PM, 1:15–3PM",
                                                                             Tuesday: "7:30AM–12PM, 1:15–3PM",
                                                                             Wednesday:"7:30AM–12PM, 1:15–3PM",
                                                                            Thursday:"7:30AM–12PM, 1:15–3PM",
                                                                             Friday: "7:30AM–12PM, 1:15–3PM",
                                                                             Saturday: "",
                                                                             Sunday: ""
                                                                            }
                                                                            
                                                                        ]
                                                                        },
                                                                        {
                                                                            Facility_Name: "Friendship House Sunday Service",
                                                                            Latitude: "39.74386",
                                                                            Langitude: "-75.55057",
                                                                            Type:"Hot Meals",
                                                                            County:"New Castle",
                                                                            City:"Wilmington",
                                                                            Address: "720 N. Orange Street",  
                                                                            Phone_number: "(302) 652-8033",
                                                                            Requirements: "call (302) 652-8033",
                                                                            Additional_info: "First Come, First Serve",
                                                                            Hours: [
                                                                                {Monday: "7:00am - 9:00am",
                                                                                 Tuesday: "",
                                                                                 Wednesday:"",
                                                                                Thursday:"",
                                                                                 Friday: "",
                                                                                 Saturday: "",
                                                                                 Sunday: ""
                                                                                }
                                                                                
                                                                            ]
                                                                            },
                                                                         {
                                                                            Facility_Name: "DeLaWarr State Service Center",
                                                                            Latitude: "39.71218",
                                                                            Langitude: "-75.54906",
                                                                            Type:"Food Pantry",
                                                                            County:"New Castle",
                                                                            City:"New Castle",
                                                                            Address: "500 Rogers Road",  
                                                                            Phone_number: "(302) 577-2970",
                                                                            Requirements: "call (302) 577-2970",
                                                                            Additional_info: "",
                                                                            Hours: [
                                                                                {Monday: "9:00am - 12:30pm",
                                                                                 Tuesday: "9:00am - 12:30pm",
                                                                                 Wednesday:"9:00am - 12:30pm",
                                                                                 Thursday:"9:00am - 12:30pm",
                                                                                 Friday: "9:00am - 12:30pm",
                                                                                 Saturday: "",
                                                                                 Sunday: ""
                                                                                }
                                                                                
                                                                            ]
                                                                            },
                                                                            {
                                                                                Facility_Name: "Dagsboro Church of God",
                                                                                Latitude: "38.54502",
                                                                                Langitude: "-75.26065",
                                                                                Type:"Food Pantry",
                                                                                County:"Sussex",
                                                                                City:"Dasboro",
                                                                                Address: "32224 Dupont Boulevard",  
                                                                                Phone_number: "(302) 732-6550",
                                                                                Requirements: "Appointment call (302) 732-6550",
                                                                                Additional_info: "",
                                                                                Hours: [
                                                                                    {Monday: "",
                                                                                     Tuesday: "",
                                                                                     Wednesday:"",
                                                                                     Thursday:"",
                                                                                     Friday: "",
                                                                                     Saturday: "",
                                                                                     Sunday: ""
                                                                                    }
                                                                                    
                                                                                ]
                                                                                },
                                                                                {
                                                                                    Facility_Name: "Bethel Tabernacle Church of God",
                                                                                    Latitude: "38.54796",
                                                                                    Langitude: "-75.15181",
                                                                                    Type:"Food Pantry",
                                                                                    County:"Sussex",
                                                                                    City:"Frankford",
                                                                                    Address: "34180 Omar Road",  
                                                                                    Phone_number: "(302) 732-6550",
                                                                                    Requirements: "By Appointment call (302) 539-6768",
                                                                                    Additional_info: "1st three Tuesdays of the month ",
                                                                                    Hours: [
                                                                                        {Monday: "",
                                                                                         Tuesday: "",
                                                                                         Wednesday:"",
                                                                                         Thursday:"",
                                                                                         Friday: "",
                                                                                         Saturday: "",
                                                                                         Sunday: ""
                                                                                        }
                                                                                        
                                                                                    ]
                                                                                    },
                                                                                    {
                                                                                        Facility_Name: "Thurman Adams State Service Center",
                                                                                        Latitude: "38.66534",
                                                                                        Langitude: "-75.37825",
                                                                                        Type:"Food Pantry",
                                                                                        County:"Sussex",
                                                                                        City:"Georgetown",
                                                                                        Address: "546 South Bedford Street",  
                                                                                        Phone_number: "(302) 515-3000",
                                                                                        Requirements: "Photo ID",
                                                                                        Additional_info: "call (302) 515-3000",
                                                                                        Hours: [
                                                                                            {Monday: "9:00am - 4:00pm",
                                                                                             Tuesday: "9:00am - 4:00pm",
                                                                                             Wednesday:"9:00am - 4:00pm",
                                                                                             Thursday:"9:00am - 4:00pm",
                                                                                             Friday: "9:00am - 4:00pm",
                                                                                             Saturday: "",
                                                                                             Sunday: ""
                                                                                            }
                                                                                            
                                                                                        ]
                                                                                        },
                                                                                        {
                                                                                            Facility_Name: "Catholic Charities Basic Needs Program ",
                                                                                            Latitude: "38.66534",
                                                                                            Langitude: "-75.37825",
                                                                                            Type:"Food Pantry",
                                                                                            County:"Sussex",
                                                                                            City:"Georgetown",
                                                                                            Address: "406 Bedford Street Suite 9",  
                                                                                            Phone_number: "(302) 856-9578",
                                                                                            Requirements: "Proof of income and monthly expenses",
                                                                                            Additional_info: "call (302) 856-9578",
                                                                                            Hours: [
                                                                                                {Monday: "8:30am - 4:30pm",
                                                                                                 Tuesday: "8:30am - 4:30pm",
                                                                                                 Wednesday:"8:30am - 4:30pm",
                                                                                                 Thursday:"8:30am - 4:30pm",
                                                                                                 Friday: "8:30am - 4:30pm",
                                                                                                 Saturday: "",
                                                                                                 Sunday: ""
                                                                                                }
                                                                                                
                                                                                            ]
                                                                                            },
                                                                                            {
                                                                                                Facility_Name: "Thurman Adams State Service Center",
                                                                                                Latitude: "38.66534",
                                                                                                Langitude: "-75.37825",
                                                                                                Type:"Food Pantry",
                                                                                                County:"Sussex",
                                                                                                City:"Georgetown",
                                                                                                Address: "546 South Bedford Street",  
                                                                                                Phone_number: "(302) 515-3000",
                                                                                                Requirements: "Photo ID",
                                                                                                Additional_info: "call (302) 515-3000",
                                                                                                Hours: [
                                                                                                    {Monday: "9:00am - 4:00pm",
                                                                                                     Tuesday: "9:00am - 4:00pm",
                                                                                                     Wednesday:"9:00am - 4:00pm",
                                                                                                     Thursday:"9:00am - 4:00pm",
                                                                                                     Friday: "9:00am - 4:00pm",
                                                                                                     Saturday: "",
                                                                                                     Sunday: ""
                                                                                                    }
                                                                                                    
                                                                                                ]
                                                                                                },
                                                                                                {
                                                                                                    Facility_Name: "Blessed Giving ",
                                                                                                    Latitude: "38.691226",
                                                                                                    Langitude: "-75.37871",
                                                                                                    Type:"Food Pantry",
                                                                                                    County:"Sussex",
                                                                                                    City:"Georgetown",
                                                                                                    Address: "40 Ingramtown Rd",  
                                                                                                    Phone_number: "(302) 339-3905",
                                                                                                    Requirements: "Appointment only call (302) 339-3905",
                                                                                                    Additional_info: "",
                                                                                                    Hours: [
                                                                                                        {Monday: "12:00pm - 3:00pm",
                                                                                                         Tuesday: "12:00pm - 3:00pm",
                                                                                                         Wednesday:"12:00pm - 3:00pm",
                                                                                                         Thursday:"12:00pm - 3:00pm",
                                                                                                         Friday: "12:00pm - 3:00pm",
                                                                                                         Saturday: "",
                                                                                                         Sunday: ""
                                                                                                        }
                                                                                                        
                                                                                                    ]
                                                                                                    },
                                                                                                    {
                                                                                                        Facility_Name: "First State Community Action",
                                                                                                        Latitude: "38.691226",
                                                                                                        Langitude: "-75.37871",
                                                                                                        Type:"Food Pantry",
                                                                                                        County:"Sussex",
                                                                                                        City:"Georgetown",
                                                                                                        Address : "308 North Railroad Ave",  
                                                                                                        Phone_number: "(302) 856-7761",
                                                                                                        Requirements: "ID for head of Household, security cards for all household members and proof of income.",
                                                                                                        Additional_info: "call (302) 856-7761",
                                                                                                        Hours: [
                                                                                                            {Monday: "8:00am - 4:30pm",
                                                                                                             Tuesday: "8:00am - 4:30pm",
                                                                                                             Wednesday:" 8:00am - 4:30pm",
                                                                                                             Thursday:" 8:00am - 4:30pm",
                                                                                                             Friday: " 8:00am - 4:30pm",
                                                                                                             Saturday: "",
                                                                                                             Sunday: ""
                                                                                                            }
                                                                                                            
                                                                                                        ]
                                                                                                        },
                                                                                                        {
                                                                                                            Facility_Name: "Mariners Bethel Food pantry ",
                                                                                                            Latitude: "38.53804",
                                                                                                            Langitude: "-75.10644",
                                                                                                            Type:"Food Pantry",
                                                                                                            County:"Sussex",
                                                                                                            City:"Ocean view",
                                                                                                            Address: "81 Central Ave",  
                                                                                                            Phone_number: "(302) 539-9510",
                                                                                                            Requirements: "call (302) 539-9510",
                                                                                                            Additional_info: "",
                                                                                                            Hours: [
                                                                                                                {Monday: "",
                                                                                                                 Tuesday: "",
                                                                                                                 Wednesday:"",
                                                                                                                 Thursday:"",
                                                                                                                 Friday: "",
                                                                                                                 Saturday: "",
                                                                                                                 Sunday: ""
                                                                                                                }
                                                                                                                
                                                                                                            ]
                                                                                                            },
                                                                                                            {
                                                                                                                Facility_Name: "Jusst Sooup Ministry",
                                                                                                                Latitude: "38.72529",
                                                                                                                Langitude: "-75.24788",
                                                                                                                Type:"Food Pantry",
                                                                                                                County:"Sussex",
                                                                                                                City:"Milton",
                                                                                                                Address: "18483 Cool Spring Rd",  
                                                                                                                Phone_number: "(302) 644-8113",
                                                                                                                Requirements: "call (302) 644-8113",
                                                                                                                Additional_info: "",
                                                                                                                Hours: [
                                                                                                                    {Monday: "",
                                                                                                                     Tuesday: "",
                                                                                                                     Wednesday:"",
                                                                                                                     Thursday:"",
                                                                                                                     Friday: "",
                                                                                                                     Saturday: "",
                                                                                                                     Sunday: ""
                                                                                                                    }
                                                                                                                    
                                                                                                                ]
                                                                                                                },
                                                                                                                {
                                                                                                                    Facility_Name: "Casa San Francisco Emergency Food Pantry",
                                                                                                                    Latitude: "38.77959",
                                                                                                                    Langitude: "-75.3131",
                                                                                                                    Type:"Food Pantry",
                                                                                                                    County:"Sussex",
                                                                                                                    City:"Milton",
                                                                                                                    Address : "127 Broad Street",  
                                                                                                                    Phone_number: "(302) 684-8694",
                                                                                                                    Requirements: "proof of income",
                                                                                                                    Additional_info: "call (302) 684-8694",
                                                                                                                    Hours: [
                                                                                                                        {Monday: "",
                                                                                                                         Tuesday: "",
                                                                                                                         Wednesday:"",
                                                                                                                         Thursday:"",
                                                                                                                         Friday: "",
                                                                                                                         Saturday: "",
                                                                                                                         Sunday: ""
                                                                                                                        }
                                                                                                                        
                                                                                                                    ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        Facility_Name: "Milton Community Food Panty",
                                                                                                                        Latitude: "38.77686",
                                                                                                                        Langitude: "-75.310679",
                                                                                                                        Type:"Food Pantry",
                                                                                                                        County:"Sussex",
                                                                                                                        City:"Milton",
                                                                                                                        Address : "114 Federal Street",  
                                                                                                                        Phone_number: "(302) 278-9557",
                                                                                                                        Requirements: "Monday, more info call (302) 278-9557",
                                                                                                                        Additional_info: "website https://www.miltonpantry.org/",
                                                                                                                        Hours: [
                                                                                                                            {Monday: "",
                                                                                                                             Tuesday: "",
                                                                                                                             Wednesday:"",
                                                                                                                             Thursday:"",
                                                                                                                             Friday: "",
                                                                                                                             Saturday: "",
                                                                                                                             Sunday: ""
                                                                                                                            }
                                                                                                                            
                                                                                                                        ]
                                                                                                                    }
]

    // Food pantry
    // Filter
    let foodPantry = () => { 
        let fdPantry = data.filter(function(ele){
        return ele.Type == "Food Pantry"
    })
        return fdPantry 
}
   


    //Mobile Pantry
    //Filter
    let mobilePantry = () => { 
        let mobile = data.filter(function(ele){
        return ele.Type == "Mobile Pantry"
    })
        return mobile
}
    //Food Bank
    //Filter
    let foodBank = () => {
        let food = data.filter(function(ele){
        return ele.Type == "Food Bank"
    })
        return food 
}


    //Hot meals
    //Filter
    // let hotMeals = data.filter(function(ele){
    //     return ele.Type == "Hot Meals"
    // });
let hotMeals = () => {
    let meal = data.filter(function(ele){
        return ele.Type == "Hot Meals"
    })
    return meal 
}

function showItems(func, id){
document.getElementById(id).addEventListener("click", function(){
         func().forEach(function (n) {
            tBody.innerHTML += ` <tr>
            <td>${n.Facility_Name}</td>
            <td>${n.Type}</td>
            <td>${n.County}</td>
            <td>${n.City}</td>
            <td>${n.Address}</td> 
            <td>${n.Phone_number}</td> 
            <td>${n.Requirements}</td> 
            <td>${n.Additional_info}</td> 
            <td> <ul>
            <li> Monday: ${n.Hours[0].Monday} </li>
            <li> Tuesday: ${n.Hours[0].Tuesday} </li>
            <li> Wednesday: ${n.Hours[0].Tuesday} </li>
            <li> Thursday: ${n.Hours[0].Tuesday} </li>
            <li> Friday: ${n.Hours[0].Tuesday} </li>
            <li> Saturday: ${n.Hours[0].Tuesday} </li>
            <li> Sunday: ${n.Hours[0].Tuesday} </li>
            </ul> </td> 
            </tr> `
})}

)}

    showItems(hotMeals, "Hot_Meals")
    showItems(foodBank, "Food_Bank")
    showItems(mobilePantry, "Mobile_Pantry")
    showItems(foodPantry, "Food_Pantry")

    //
    //All near me

// Map Box

    
    mapboxgl.accessToken = "pk.eyJ1Ijoic2xvd2Jybzg5MCIsImEiOiJja29peGYzYmUwczc5Mm5rMnNnaHI2ZDhvIn0.2WzdsUMONapZbsQ-m0hYLw"

    
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11', // replace this with your style URL
                center: [-75.5779807,39.0084464],
                zoom: 8.5
    });

    map.addControl(new mapboxgl.NavigationControl());



                // add markers to map
        data.forEach(function (marker) {
            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';
     
            // make a marker for each feature and add it to the map
            new mapboxgl.Marker(el)
            .setLngLat([marker.Langitude , marker.Latitude])
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
            `<h3> ${marker.Facility_Name} </h3>
                <p>Phone Number: <strong>${marker.Phone_number} </strong></p>
                <p>Address: <strong>${marker.Address} </strong></p> 
                <p>Type: <strong>${marker.Type} </strong></p>
                <button> Directions </button>`))    
                .addTo(map);
                
    });
    
