function namecheck() {
    let name = document.getElementById("name").value
    let nm = null
    nm = name.trim()
    var letters = /^[A-Za-z]+$/;
    var spc = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
    document.getElementById("name").value = nm;
    if (nm == "" || name == null) {
      document.getElementById("nmlabel").style.display = "block"
      return false
    }
    else if (!isNaN(nm[0])) {
      document.getElementById("nmlabel").style.display = "none"
      document.getElementById("nmlabel-01").style.display = "block"
      return false
    }
    else if (nm.match(spc)) {
      document.getElementById("nmlabel").style.display = "none"
      document.getElementById("nmlabel-01").style.display = "none"
      document.getElementById("nmlabel-02").style.display = "block"
      return false
    }
    else {
      document.getElementById("nmlabel").style.display = "none"
      document.getElementById("nmlabel-01").style.display = "none"
      document.getElementById("nmlabel-02").style.display = "none"
      return true
  
    }
  }
  
  

