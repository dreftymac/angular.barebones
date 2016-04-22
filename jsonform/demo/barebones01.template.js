[
  {
    "type": "fieldset",
    "model": "fieldset",
    "label": "fieldset",
    "fields": [
      {
        "type": "hidden",
        "model": "hidden",
        "label": "hidden",
        "val": "hidden"
      },
      {
        "type": "image",
        "model": "image",
        "label": "image",
        "source": "http://angularjs.org/img/AngularJS-large.png"
      },
      {
        "type": "legend",
        "model": "legend",
        "label": "legend"
      },
      {
        "type": "month",
        "model": "month",
        "label": "month",
        "placeholder": "month"
      },
      {
        "type": "checklist",
        "model": "nested.checklist",
        "label": "nested.checklist",
        "options": {
          "first": {
            "label": "first option"
          },
          "second": {
            "label": "second option",
            "isOn": "true",
            "isOff": "false"
          }
        }
      },
      {
        "type": "number",
        "model": "number",
        "label": "number",
        "placeholder": "number"
      },
      {
        "type": "password",
        "model": "password",
        "label": "password",
        "placeholder": "password"
      },
      {
        "type": "radio",
        "model": "radio",
        "label": "radio",
        "values": {
          "first": "first option",
          "second": "second option",
          "third": "third option",
          "fourth": "fourth option",
          "fifth": "fifth option"
        }
      },
      {
        "type": "range",
        "model": "number",
        "label": "range",
        "val": 42,
        "minValue": -42,
        "maxValue": 84
      }
    ]
  }
]  
