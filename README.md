# Pakasa WhatsApp Button

An extension to add WhatsApp chat button in the navbar.

> **Note**: This extension requires EverShop version 1.0.0-rc.6 or higher.

## Installation

### Step 1: Install the extension package

```javascript
npm install @pakasa/duuka-whatsapp-button
```

### Step 2: Register the extension by adding it to the config file

```json
// config/default.json
{
  ...,
  "system": [
    ...,
    "extensions": [
        ...,
        {
          "name": "pakasa_whatsapp_chat",
          "resolve": "node_modules/@pakasa/duuka-whatsapp-button",
          "enabled": true,
          "priority": 10
        }
    ]
  ]
}
```

### Step 3: Configure the extension

```json
// config/config.json
{
  ...,
  "pakasa_whatsapp_chat": {
    "phoneNumber" :  "<required: your whatsapp number with the country code>",
    "message" : "<optional: greeting text for the users>",
    "buttonText" :  "<optional: button label text>",
    "className" : "<optional: any custom css classes>"
  }
}
```
