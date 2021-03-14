
function swap_citation_type(tag_id, tag_type){
  // Convert <blockquote> to <q> and vice versa

  replace_tag(tag_id, tag_type);
	jQuery('#' + tag_id).quoteContext();

}

function replace_tag(tag_id, tag_type){

  var div_id = 'sample-quote-container';

  var url = jQuery('#' + tag_id).val('#' + tag_id).attr("cite");
  
  if (tag_type === 'blockquote') {
    // Get text from existing q tag, which has an anchor tag
    var text = jQuery('#' + tag_id + ' > a').text();
  }
  else {
    var text = jQuery('#' + tag_id).text();
  }
  
  // Build blockquote/q  element:
  var new_div = document.createElement(tag_type);
  new_div.setAttribute('id', tag_id);
  new_div.setAttribute('cite', url);
  new_div.textContent = text;

  // Build Replacement div:
  var replacement_div = document.createElement('div');
  replacement_div.setAttribute('id', div_id);
  replacement_div.appendChild(new_div);

  jQuery('div#' + div_id).replaceWith(function(){
    return replacement_div; 
  });

}

function append_element(id, element_message, sleep_ms){
  setTimeout(function(){
    var message = document.createElement('div');
    message.innerHTML = element_message;
    document.getElementById(id).appendChild(message);

  }, sleep_ms);

}

var message_cnt = 0;   

function process_test_citation() {

  citing_quote = document.getElementById('citing_quote');
  citing_url = document.getElementById('citing_url');
  cited_url = document.getElementById('cited_url');

  var tag_type = 'blockquote';
  
  // Display 'Loading circle'
  jQuery('#loading').addClass('visible');

  // Return data from API
  var submission_steps = [
        "<b>Contacting CiteIt webservice ..</b>",
        "Looking up source from URL ..",
        "Locating quotation ..", 
        "Copying 500 characters before and after quotation.",
        "Saving context data in JSON format.",
        "Loading JSON data into current page using javascript.",
        "<b>Submission Complete..</b>"
    ];

  // Print first message immediately: don't wait:
  if (message_cnt == 0) {
    var message = submission_steps[message_cnt];
    jQuery('ul#progress_list').append('<li>' + message + '</li>');  
    message_cnt++;
  }

  // Pause for 2 seconds before printing other messages
  setTimeout(function() {   
    var message = submission_steps[message_cnt];
    jQuery('ul#progress_list li:last').append('<li>' + message + '</li>');  

    message_cnt++;
    if (message_cnt < 7) {
      console.log("message");
      process_test_citation();
    }
    else {
      jQuery('#submission-results').removeClass('hidden');
      jQuery('#submission-results').addClass('visible');
      jQuery('#submission-results').addClass('visible');
      jQuery('#circle6').addClass('hidden');
 
    }
  }, 1500)
}

