[
  {
    "type": "image",
    "model": "image",
    "label": "image",
    "source": "http://angularjs.org/img/AngularJS-large.png"
  }
  ,
  {
    "type":     "fieldset",
    "model":    "fieldset001",
    "label":    "Basic Information",
    "fields": [{"type": "legend","model": "legend001","label":
               "For more information about registration, please see the <a href='http://jsma.uoregon.edu/ArtCamp' target='_blank'>JSMA website</a>."}
      ,{
        "type": "text",
        "model": "pargfname01",
        "attributes": {"style":"background-color:#f5f5f5;"},
        "label": "Parent First Name"
      }
      ,{
        "type": "text",
        "model": "parglname01",
        "attributes": {"style":"background-color:#f5f5f5;"},
        "label": "Parent Last Name"
      }
      ,{
        "type": "text",
        "model": "studfname01",
        "attributes": {"style":"background-color:inherit;"},
        "label": "Student First Name"
      }
      ,{
        "type": "text",
        "model": "studlname01",
        "attributes": {"style":"background-color:inherit;"},
        "label": "Student Last Name"
      }
    ]
  }
  ,
  {
    "type":     "fieldset",
    "model":    "fieldset002",
    "label":    "Student Details",
    "fields": [{"type":"legend" ,"model":"legend002", "label":
               ""}
      ,{
        "type": "text",
        "model": "addressline1_002",
        "attributes": {"style":"width:100%;background-color:#f5f5f5;"},
        "label": "Address Line 1"
      }
      ,{
        "type": "text",
        "model": "addressline2_002",
        "attributes": {"style":"width:100%;background-color:inherit;"},
        "label": "Address Line 2"
      }
      ,{
        "type": "text",
        "model": "city_002",
        "attributes": {"style":"width:33%;background-color:#f5f5f5;"},
        "label": "City"
      }
      ,{
        "type": "text",
        "model": "state_002",
        "attributes": {"style":"width:33%;background-color:#f5f5f5;"},
        "label": "State"
      }
      ,{
        "type": "text",
        "model": "zip_002",
        "attributes": {"style":"width:33%;background-color:#f5f5f5;"},
        "label": "Zip"
      }
      ,{
        "type": "text",
        "model": "emeremail_002",
        "attributes": {"style":"background-color:inherit;"},
        "label": "Emergency Email"
      }
      ,{
        "type": "text",
        "model": "emertele_002",
        "attributes": {"style":"background-color:inherit;"},
        "label": "Emergency Phone"
      }
      ,{
        "type": "text",
        "model": "authpick_002",
        "attributes": {"style":"background-color:#f5f5f5;"},
        "label": "Authorized Pickup"
      }
      ,{
        "type": "select",
        "model": "howwfind_002",
        "attributes": {"ng-if":"12"},        
        "label": "select",
        "empty": "",
        "options": {          
          "first--99": {"label":  "first option"},
          "second--88": {"label": "second option"},
          "third--77": {"label":  "third option"}
        }          
      }      
      ,{
        "type": "select",
        "model": "howheard_002",
        "attributes": {"ng-show":"howwfind_002"},        
        "label": "select",
        "empty": "empty",
        "options": {          
          "main": {"label": "first option","group": "group zero"}
          ,"alpha": {"label": "alpha option","group": "group one"}
          ,"bravo": {"label": "bravo option","group": "group one"}
          ,"charl": {"label": "charl option","group": "group one"}
          ,"delta": {"label": "delta option","group": "group one"}
          
          ,"echoo": {"label": "echoo option","group": "group two"}
          ,"foxtr": {"label": "foxtr option","group": "group two"}
          ,"golff": {"label": "golff option","group": "group two"}
          ,"hotel": {"label": "hotel option","group": "group two"}
        }
      }

    ]
  }
]
