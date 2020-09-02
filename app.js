'use strict';

console.log('Here\'s a hidden message');

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;

let check = function(logic_function, postive_action, negative_action){
    return (answers) => {logic_function(answers, postive_action, negative_action);}
}
 let return_id = function(id){
     return (answers) => id;
 }

let sleep = function(answers,postive_action, negative_action){
    if(answers.includes("sleep_yes")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let sick_relative= function(answers,postive_action, negative_action){
    if(answers.includes("relative_yes")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let derpessiv = function(answers,postive_action, negative_action){
    if(answers.includes("depression")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let subjective_stress = function(answers,postive_action, negative_action){
    if(answers.includes("stress")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let lack_of_motivation = function(answers,postive_action, negative_action){
    if(answers.includes("")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let short_breath = function(answers,postive_action, negative_action){
    if(answers.includes("breathing")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let work = function(answers,postive_action, negative_action){
    if(answers.includes("work_overload")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let sense_of_fairness = function(answers,postive_action, negative_action){
    if(answers.includes("fairness")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let exhaustion = function(answers,postive_action, negative_action){
    if(answers.includes("phys_exhaustion")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let emotional_exhaustion = function(answers,postive_action, negative_action){
    if(answers.includes("psy_exhaustion")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let stigma = function(answers,postive_action, negative_action){
    if(answers.includes("stigma_yes")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let case_manager = function(answers,postive_action, negative_action){
    if(answers.includes("medical_alone_yes")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let finacial_worries = function(answers,postive_action, negative_action){
    if(answers.includes("financial_worries")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let loss_of_appetit = function(answers,postive_action, negative_action){
    if(answers.includes("loss_apetite")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let loneliness = function(answers,postive_action, negative_action){
    if(answers.includes("alone")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let problem_with_management = function(answers,postive_action, negative_action){
    if(answers.includes("stress_manager")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let change_of_work_responsibility = function(answers,postive_action, negative_action){
    if(answers.includes("work_change")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let suicidal_thoughts = function(answers,postive_action, negative_action){
    if(answers.includes("deaththoughts_yes")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let ponder = function(answers,postive_action, negative_action){
    if(answers.includes("")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let professional_activity = function(answers,postive_action, negative_action){
    if(answers.includes("work_overload")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let low_selfesteem = function(answers,postive_action, negative_action){
    if(answers.includes("self_asurness")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let career_entry = function(answers,postive_action, negative_action){
    if(answers.includes("")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let need_to_conform = function(answers,postive_action, negative_action){
    if(answers.includes("please_everybody")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}

let ambition = function(answers,postive_action, negative_action){
    if(answers.includes("ambitious")){
        postive_action(answers);
    } else {
        negative_action(answers);
    }
}


let find_story_id = check(
    sleep,
    check(
        sick_relative,
        check(
            subjective_stress,
            check(
                lack_of_motivation,
                check(
                    short_breath,
                    return_id("id_25"),
                    return_id("id_32")
                ),
                check(
                    work,
                    return_id("id_39"),
                    return_id("id_13")
                )
            ),
            check(
                ponder,
                check(sense_of_fairness,
                    return_id("id_38"),
                    return_id("id_24")
                ),
                check(
                    lack_of_motivation,
                    return_id("id_52"),
                    return_id("id_30")
                )
            )
        ),
        check(
            derpessiv,
            check(
                professional_activity,
                check(
                    short_breath,
                    return_id("id_21"),
                    return_id("id_45")
                ),
                check(
                    lack_of_motivation,
                    return_id("id_37"),
                    return_id("id_29")
                )
            ),
            check(
                loss_of_appetit,
                check(
                    lack_of_motivation,
                    return_id("id_35"),
                    return_id("id_26")
                ),
                check(
                    exhaustion,
                    return_id("id_31"),
                    check(
                        low_selfesteem,
                        return_id("id_47"),
                        return_id("id_36")
                    )
                )
            )
        )
    ),
    check(
        suicidal_thoughts,
        check(
            lack_of_motivation,
            check(
                loneliness,
                check(
                    stigma,
                    return_id(),
                    return_id()
                ),
                check(
                    work,
                    return_id(),
                    check(
                        career_entry,
                        return_id(),
                        return_id()
                    )
                )
            ),
            check(
                finacial_worries,
                check(
                    need_to_conform,
                    return_id(),
                    check(
                        derpessiv,
                        return_id(),
                        return_id()
                    )
                ),
                check(
                    change_of_work_responsibility,
                    return_id(),
                    check(
                        case_manager,
                        return_id(),
                        return_id()
                    )
                )
            )
        ),
        check(
            lack_of_motivation,
            check(
                ambition,
                check(
                    professional_activity,
                    return_id(),
                    return_id()
                ),
                check(
                    derpessiv,
                    return_id(),
                    check(
                        emotional_exhaustion,
                        return_id(),
                        return_id()
                    )
                )
            ),
            check(
                loss_of_appetit,
                check(
                    change_of_work_responsibility,
                    return_id(),
                    check(
                        problem_with_management,
                        return_id(),
                        return_id(),
                    )
                ),
                check(
                    derpessiv,
                    check(
                        loneliness,
                        return_id(),
                        return_id()
                    ),
                    check(
                        change_of_work_responsibility,
                        return_id(),
                        return_id()
                    )
                )
            )
        )
    )
)
