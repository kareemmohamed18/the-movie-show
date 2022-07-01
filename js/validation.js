export function valid()
{
    
let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let phoneInput=document.getElementById('phoneInput');
let ageInput=document.getElementById('ageInput');
let passwordInput=document.getElementById('passwordInput');
let rePasswordInput=document.getElementById('rePasswordInput')
let submitBtn =document.getElementById("submit");



nameInput.addEventListener('keyup' ,validName );
emailInput.addEventListener('keyup' ,validEmail );
phoneInput.addEventListener('keyup' ,validPhone );
ageInput.addEventListener('keyup' ,validAge );
passwordInput.addEventListener('keyup',validPassword );
rePasswordInput.addEventListener('keyup',validRePassword );




function validName()
{
  let regex = /^[a-zA-z ]{3,20}$/;

  if(regex.test(nameInput.value)==true)
    {
      
      nameInput.classList.add('is-valid');
      nameInput.classList.remove('is-invalid');
      // $('.valid-input input').eq(0).addClass('is-valid');
      // $('.valid-input input').eq(0).removeClass( 'is-invalid');
      return true;

    }
    else
    {
      $('.valid-input input').eq(0).addClass( 'is-invalid');
      $('.valid-input input').eq(0).removeClass( 'is-valid');

        return false;

    };

}
  

function validEmail()
{
  let regex = /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/;

  if(regex.test(emailInput.value)==true)
    {
      $('.valid-input input').eq(1).addClass('is-valid');
      $('.valid-input input').eq(1).removeClass( 'is-invalid');

        return true;

    }
    else
    {
      $('.valid-input input').eq(1).addClass( 'is-invalid');
      $('.valid-input input').eq(1).removeClass( 'is-valid');

        return false;

    };

}

function validPhone()
{
  let regex = /^01[0125][0-9]{8}$ /;

  if(regex.test(phoneInput.value)==true)
    {
      $('.valid-input input').eq(2).addClass('is-valid');
      $('.valid-input input').eq(2).removeClass( 'is-invalid');

        return true;

    }
    else
    {
      $('.valid-input input').eq(2).addClass( 'is-invalid');
      $('.valid-input input').eq(2).removeClass( 'is-valid');

        return false;

    };

}


function validAge()
{
  let regex = /^[0-9]{2}$/;

  if(regex.test(ageInput.value)==true)
    {
      $('.valid-input input').eq(3).addClass('is-valid');
      $('.valid-input input').eq(3).removeClass( 'is-invalid');

        return true;

    }
    else
    {
      $('.valid-input input').eq(3).addClass( 'is-invalid');
      $('.valid-input input').eq(3).removeClass( 'is-valid');

        return false;

    };
}

function validPassword()
{
  let regex = /^[A-Z]{1}[a-z0-9]{5,20}$/;

  if(regex.test(passwordInput.value)==true)
    {
      $('.valid-input input').eq(4).addClass('is-valid');
      $('.valid-input input').eq(4).removeClass( 'is-invalid');
        return true;

    }
    else
    {
      $('.valid-input input').eq(4).addClass( 'is-invalid');
      $('.valid-input input').eq(4).removeClass( 'is-valid');

        return false;

    };
}



function validRePassword()
{

  
  let regex = /^[A-Z]{1}[a-z0-9]{5,20}$/;

  if( rePasswordInput.value==passwordInput.value && regex.test(passwordInput.value))
    {
      $('.valid-input input').eq(5).addClass('is-valid');
      $('.valid-input input').eq(5).removeClass( 'is-invalid');
        return true;

    }
    else
    {
      $('.valid-input input').eq(5).addClass( 'is-invalid');
      $('.valid-input input').eq(5).removeClass( 'is-valid');

        return false;

    };
}





let inputs = Array.from(document.querySelectorAll('.valid-input input'));

for(let i=0 ; i<inputs.length ; i++)
{
  inputs[i].addEventListener('keyup', function()
  {
    if(validName() && validEmail()  &&  validPhone()  && validAge() && validPassword() && validRePassword()     )
    {
      submitBtn.removeAttribute('disabled')      
    }
    else
    {
      submitBtn.disabled=true;
    }

  })

}


}