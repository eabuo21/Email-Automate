//this  simple code automates  email sending with gmail and google sheets links to every team member of tongston holdings to be updated as per monthly  basis

function sendMonthlyEmail() {
    // Set the recipients, subject, and body of the email
    
   var recipients = "it@tongston.com, bmtongo@tongston.com, t-college@tongston.com, t-institute@tongston.com, t-media@tongston.com, t-ventures@tongston.com, admin@tongston.com, hr@tongston.com, researchandeconomics@tongston.com, info@tongston.com, eabuo@tongston.com, pekunola@tongston.com, pabolarin@tongston.com, bmtongo@tongston.com, fadebanjo@tongston.com, fatima.aliu@tongston.com";

    
    var subject = "NOTICE & CIRCULAR - Proposed AI Tools for departments - IMPORTANT AND URGENT! [MONTHLY UPDATES FOR ALL STAFF USE AND ACTION]";

      var body = "Dear All, \n\n  As discussed, we will be updating the schedule bellow on AI tools: https://docs.google.com/spreadsheets/d/1qVdiF_bPUba04JbY4GexXdB5fU6hxqUvMHw7IRsUuhI/edit#gid=0,:\n\n Kindly refer to the spreadsheet and make use of the newly added tools. \n\n Thanks \n\n Tongston IT";
 

  // Get the URL of your Google Sheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName("Proposed A.I tools for departments - Updates every month"); // here  we enter the name of our google sheet 
  var sheetUrl = spreadsheet.getUrl();

  // Append the sheet link to the email body
  body += "\n\n" + sheetUrl;

  // Send the email
  MailApp.sendEmail({
    to: recipients,
    subject: subject,
    body: body,
  });
}
