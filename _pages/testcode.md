---
ID: 45
post_title: poc test
author: admin
post_excerpt: ""
layout: page
permalink: http://psyga-se.de/testcode/
published: true
post_date: 2020-07-21 13:23:42
---
<title>psyGA Selbsteinschätzung</title>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
 	 	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<!-- PSYGA CSS 
 	 	<link rel="stylesheet" href="psyga1.css">
 	 	<link rel="stylesheet" href="psyga2.css">
-->

<style>
        #messages > details {<br />
    background-color: #587991 !important;<br />
    color: #DDDDDD !important;<br />
}</p>
<p>details > details {<br />
    margin-left: 1em;<br />
    background-color: #FFF2 !important;<br />
}<br />
summary {<br />
    display: list-item;<br />
    cursor: pointer;<br />
    color: #DDD !important;<br />
}<br />
details > p, details > p:first-line, details > p:first-letter, details > button.active, details > button.active.focus, details > button.active:first-letter {<br />
    color: #DDD !important;<br />
}<br />
details > button, details > button:first-letter, details > button.focus, details > button.focus:first-letter :hover{<br />
    color: #DDD5 !important;<br />
}<br />
button.filter {<br />
    background-color: rgba(64, 88, 64, 80) !important;<br />
}<br />
h1 {<br />
    text-align: center;<br />
}<br />
.warning {<br />
    background-color: red;<br />
    margin: 60px;<br />
    height: 200px;<br />
    text-align: center;<br />
    padding: 70px;<br />
}</p>
</style>
<div class="container-fluid">
<div class="container" id="banner">
<h1>psyGA Selbsteinschätzung</h1>
</div>
<div class="row">
<div class="col-sm-3">
                  <!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
 	<li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Home</a></li>
 	<li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Finde deine Geschichte</a></li>
 	<li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#messages" role="tab">Geschichten</a></li>
</ul>
<div class="warning">
                    Bei Bedarf können sie hier Hilfe finden.

</div>
</div>
<div class="col-sm-6">
                 <!-- Tab panes -->
<div class="tab-content">
<div class="tab-pane active" id="home" role="tabpanel">home</div>
<div class="tab-pane" id="profile" role="tabpanel">
<h1>
                                Finde deine Geschichte</h1>
<div class="question-wrapper">
<div class="item">
<div class="question">

 Frage 1

</div>
<div class="answers">
<div class="custom-control custom-radio ">
                                            <input type="radio" class="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample">
<label class="custom-control-label" for="defaultInline1">1</label></div>
<!-- Default 2-->
<div class="custom-control custom-radio ">
                                            <input type="radio" class="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample">
<label class="custom-control-label" for="defaultInline2">2</label></div>
<!-- Default 3-->
<div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="defaultInline3" name="inlineDefaultRadiosExample">
<label class="custom-control-label" for="defaultInline3">3</label></div>
</div>
</div>
<div class="item">
<div class="question">

 Frage 2

</div>
<div class="answers">
<div class="custom-control custom-radio ">
                                            <input type="radio" class="custom-control-input" id="defaultInline2_1" name="defaultRadiosExample2">
<label class="custom-control-label" for="defaultInline2_1">1</label></div>
<!-- Default 2-->
<div class="custom-control custom-radio ">
                                            <input type="radio" class="custom-control-input" id="defaultInline2_2" name="defaultRadiosExample2">
<label class="custom-control-label" for="defaultInline2_2">2</label></div>
<!-- Default 3-->
<div class="custom-control custom-radio">
                                            <input type="radio" class="custom-control-input" id="defaultInline2_3" name="defaultRadiosExample2">
<label class="custom-control-label" for="defaultInline2_3">3</label></div>
</div>
</div>
</div>
<div class="row">
                                <button id="getStory" type="button" class="btn btn-lg btn-primary" disabled="" onclick="
                                $('.nav-tabs li:eq(2) a').tab('show');
                                $('details').removeAttr('open');
                                var detail_id = getStory();
                                openStory(detail_id)
                                ">
Zeige mir bitte meine Geschichte
</button></div>
</div>
<div class="tab-pane" id="messages" role="tabpanel">
<h1>
                                Geschichten</h1>
<details id="Filter">
<summary>Filter</summary>
<div>
                                    <button id="filter1" type="button" class="btn btn-lg btn-primary filter" onclick="$(this).toggleClass('active');triggerFilter();">
Filter 1
</button>
<button id="filter2" type="button" class="btn btn-lg btn-primary filter" onclick="$(this).toggleClass('active');triggerFilter();">
Filter 2
</button>
<button id="filter3" type="button" class="btn btn-lg btn-primary filter" onclick="$(this).toggleClass('active');triggerFilter();">
Filter 3
</button></div>
</details>
<details>
<summary>Übergreifendes Thema 1</summary>
<details id="story1">
<summary>Zusammenfassung Punkt 1</summary>                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</details>
<details id="story2">
<summary>Zusammenfassung Punkt 2</summary>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur1

</details>
</details>
<details id="story3">
<summary>Zusammenfassung Punkt 3</summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</details>
<details id="story4">
<summary>Zusammenfassung Punkt 4</summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</details>
<details id="story5">
<summary>Zusammenfassung Punkt 5</summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</details>
<details id="story6">
<summary>Zusammenfassung Punkt 6</summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</details>
<details id="story7">
<summary>Zusammenfassung Punkt 7</summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</details>
<details id="story8">
<summary>Zusammenfassung Punkt 8</summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</details>
<details id="story9">
<summary>Zusammenfassung Punkt 9</summary>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</details></div>
<div class="tab-pane" id="settings" role="tabpanel">settings</div>
</div>
</div>
<div class="col-sm-3"></div>
</div>
</div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script><br />
            $('input').change(function(){<br />
                if($('input:checked').length == 2){<br />
                    $('#getStory').prop('disabled', false);<br />
                }<br />
            });<br />
        </script>
<script><br />
            function getStory(){<br />
                var selected_answers = $('input:checked').map(function() {<br />
                    return this.id;<br />
                }).get();<br />
                function is_selected(item){<br />
                    return( selected_answers.includes(item) );<br />
                };<br />
                if(['defaultInline1'].every(is_selected)){<br />
                    return ('story1');<br />
                } else if (['defaultInline2'].every(is_selected)) {<br />
                    return ('story4');<br />
                } else if (['defaultInline3'].every(is_selected)) {<br />
                    return ('story7');<br />
                }<br />
            };<br />
        </script>
<script><br />
            function getFilterStories(filter){<br />
                var stories;<br />
                switch (filter) {<br />
                    case "filter1":<br />
                    stories = ["story1", "story4", "story7"];<br />
                    break;<br />
                    case "filter2":<br />
                    stories = ["story5", "story4", "story6"];<br />
                    break;<br />
                    case "filter3":<br />
                    stories = ["story1", "story2", "story5", "story4", "story7", "story8"];<br />
                    break;<br />
                }<br />
                return ( stories );</p>
<p>            };<br />
        </script>
<script><br />
            function openStory(detail_id){<br />
                $('details:has(details#' + detail_id + ')').attr('open', '');<br />
                $('details#' + detail_id).attr('open', '');<br />
            };<br />
        </script>
<script><br />
            function triggerFilter(){<br />
                var activeFilters = $('button.active').map(function() {<br />
                    return this.id;<br />
                }).get();<br />
                console.log(activeFilters);<br />
                $('details:not(#Filter)').removeAttr('open');<br />
                activeFilters<br />
                    .map(getFilterStories)<br />
                    .reduce((a, c) => a.filter(i => c.includes(i)))<br />
                    .map(openStory);<br />
            }<br />
        </script>