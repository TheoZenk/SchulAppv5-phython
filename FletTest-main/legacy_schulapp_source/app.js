// ----- VORDEFINIERTE FÄCHER Bayern Gymnasium -----
const subjectsBayern = [
  "Deutsch","Mathematik","Englisch","Latein","Französisch","Spanisch",
  "Biologie","Chemie","Physik","Geschichte","Geographie","Sozialkunde","Politik und Gesellschaft",
  "Musik","Kunst","Sport","Informatik","Ethik","Religion","Wirtschaft/Recht"
];
const defaultCategories = [
  {key:"schulaufgaben",label:"Schulaufgaben",weight:1},
  {key:"tests",label:"Tests",weight:1},
  {key:"muendlich",label:"Mündlich",weight:1},
  {key:"sonstiges",label:"Sonstiges",weight:1}
];
const appThemes = [
  {key:"green",label:"Hellgrün",colors:{green:"#b9e89b",accent:"#d9ffb2",surface3:"#2b332d"}},
  {key:"blue",label:"Blau",colors:{green:"#8fd3ff",accent:"#b9e5ff",surface3:"#263747"}},
  {key:"purple",label:"Lila",colors:{green:"#d2b5ff",accent:"#eadbff",surface3:"#382e4b"}},
  {key:"forest",label:"Dunkelgrün",colors:{green:"#8fd0aa",accent:"#b8e7c8",surface3:"#244236"}},
  {key:"amber",label:"Bernstein",colors:{green:"#f4c477",accent:"#ffe1a3",surface3:"#453820"}},
  {key:"midnight",label:"Mitternacht",colors:{green:"#8ca9ff",accent:"#b8c9ff",surface3:"#273047"}},
  {key:"aqua",label:"Aqua",colors:{green:"#70d8cf",accent:"#a9eee8",surface3:"#203938"}},
  {key:"rose",label:"Rosé",colors:{green:"#f0a0b8",accent:"#ffc2d3",surface3:"#432c35"}},
  {key:"indigo",label:"Indigo",colors:{green:"#b19cff",accent:"#d4c8ff",surface3:"#332d49"}}
];
const iconSvg = {
  book:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16M8 7h8M8 11h8"/></svg>',
  math:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 19 14-14M7 5h.01M17 19h.01"/><path d="M4 12h16M12 4v16"/></svg>',
  globe:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.2 5.1 3.2 8.5s-1 6.2-3.2 8.5c-2.2-2.3-3.2-5.1-3.2-8.5S9.8 5.8 12 3.5z"/></svg>',
  lab:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 16h9"/></svg>',
  brush:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 4 6 6-8.8 8.8a3.2 3.2 0 0 1-4.5 0l-.5-.5a3.2 3.2 0 0 1 0-4.5z"/><path d="M6.7 17.3c-1.2.2-3.7 1-4.2 3.7 2.7.1 4.5-.8 5.3-2.2"/></svg>',
  music:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l10-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/></svg>',
  sport:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="m8 5.5 4 3 4-3M3.8 12l4.7-.2 1.8 4.5M20.2 12l-4.7-.2-1.8 4.5"/></svg>',
  code:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 4l-2 16"/></svg>',
  scale:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M6 20h12M4 7h16M7 7l-3 6a3 3 0 0 0 6 0zM17 7l-3 6a3 3 0 0 0 6 0z"/></svg>',
  star:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
  atom:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/></svg>',
  landmark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16M6 17h12M7 17V9M12 17V9M17 17V9M4 9l8-5 8 5z"/></svg>',
  chat:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/></svg>',
  sun:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C10 4 5 8 5 14c0 3 2 5 5 5 6 0 10-5 10-15zM4 21c3-5 7-8 12-10"/></svg>',
  map:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/></svg>',
  people:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.5-4 2.5-6 5.5-6s5 2 5.5 6M14 15c3-.5 5.5 1.3 6.5 5"/></svg>',
  compass:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
  cross:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M7 9h10"/></svg>',
  briefcase:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2"/></svg>',
  hourglass:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12M6 21h12M7 3c0 5 5 5 5 9s-5 4-5 9M17 3c0 5-5 5-5 9s5 4 5 9"/></svg>',
  flask:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6M10 3v7l-5 8a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-8V3M7 16h10"/></svg>',
  heart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20S4 15 4 9a4 4 0 0 1 8-2 4 4 0 0 1 8 2c0 6-8 11-8 11z"/></svg>'
};
const subjectIcons = {
  "Deutsch":"book","Mathematik":"math","Englisch":"globe","Latein":"landmark","Französisch":"chat","Spanisch":"sun",
  "Biologie":"leaf","Chemie":"lab","Physik":"atom","Geschichte":"hourglass","Geographie":"map","Sozialkunde":"people","Politik und Gesellschaft":"briefcase",
  "Musik":"music","Kunst":"brush","Sport":"sport","Informatik":"code","Ethik":"compass","Religion":"cross","Wirtschaft/Recht":"briefcase"
};
const customSubjectIcons=["book","math","globe","lab","brush","music","sport","code","scale","star","atom","leaf","map","chat","sun","landmark","hourglass","people","compass","cross","briefcase","flask","heart"];
const subjectAliases={
  deutsch:["Deutsch","D"], mathe:["Mathematik","M","Ma","Mathe"], englisch:["Englisch","E","Eng"], latein:["Latein","L"], franzoesisch:["Französisch","F","Fz"], spanisch:["Spanisch","Sp","S"],
  biologie:["Biologie","B","Bio"], chemie:["Chemie","C","Ch","Cc"], physik:["Physik","Ph","Py"], geschichte:["Geschichte","G"], geographie:["Geographie","Geo"], sozialkunde:["Sozialkunde","Sk","Soz"], politik:["Politik und Gesellschaft","PuG","PG"],
  musik:["Musik","Mu","Mus"], kunst:["Kunst","Ku","K"], sport:["Sport","Sm","Sm_"], informatik:["Informatik","Inf","Info"], ethik:["Ethik","Eth"], religion:["Religion","R","Rel"], zfu:["ZfU","ZFU"], wirtschaft:["Wirtschaft/Recht","WR","WuR","WiR"]
};

// ----- Hilfsfunktionen -----
function $(id){return document.getElementById(id)}

// ----- Supabase Cloud-Synchronisierung -----
let supabaseClient=null;
let authUser=null;
let authMode="login";
let cloudSyncTimer=null;
let cloudSyncBusy=false;
let cloudSyncQueued=false;
let cloudAuthInitialized=false;
let cloudAuthHandling=false;
let cloudSyncReady=false;
let cloudChoiceOpen=false;
const CLOUD_TABLE="user_app_data";

function initSupabase(){
  try{
    const cfg=window.SUPABASE_CONFIG;
    if(!cfg?.url||!cfg?.publishableKey||!window.supabase?.createClient)return false;
    if(supabaseClient)return true;
    supabaseClient=window.supabase.createClient(cfg.url,cfg.publishableKey,{
      auth:{
        persistSession:true,
        autoRefreshToken:true,
        detectSessionInUrl:true,
        storageKey:"schulapp-supabase-auth"
      }
    });
    return true;
  }catch(error){
    console.error("Supabase konnte nicht gestartet werden",error);
    return false;
  }
}

function save(key,val){
  localStorage.setItem(key,JSON.stringify(val));
  queueCloudSync();
}
function load(key,def){return JSON.parse(localStorage.getItem(key)||JSON.stringify(def))}

function collectLocalAppData(){
  const data={};
  for(let i=0;i<localStorage.length;i++){
    const key=localStorage.key(i);
    if(!key||key.startsWith("supabase."))continue;
    try{data[key]=JSON.parse(localStorage.getItem(key));}
    catch(_){data[key]=localStorage.getItem(key)}
  }
  return data;
}

function hasMeaningfulLocalData(data=collectLocalAppData()){
  const ignored=new Set(["activePage","currentTimetableWeek"]);
  return Object.keys(data).some(key=>{
    if(ignored.has(key))return false;
    const value=data[key];
    if(Array.isArray(value))return value.length>0;
    if(value&&typeof value==="object")return Object.keys(value).length>0;
    return value!==null&&value!==undefined&&value!=="";
  });
}

function replaceLocalAppData(data){
  const keepKeys=new Set(["activePage"]);
  for(let i=localStorage.length-1;i>=0;i--){
    const key=localStorage.key(i);
    if(key&&!key.startsWith("supabase.")&&!keepKeys.has(key))localStorage.removeItem(key);
  }
  Object.entries(data||{}).forEach(([key,value])=>{
    if(key.startsWith("supabase."))return;
    localStorage.setItem(key,JSON.stringify(value));
  });
}

function setAuthStatus(text,kind=""){
  const card=$("authStatusCard");
  if(!card)return;
  card.classList.remove("hidden");
  card.innerHTML=text;
  card.dataset.kind=kind;
}
function clearAuthMessage(){
  [$("authError"),$("authMessage")].forEach(el=>{if(el){el.textContent="";el.classList.add("hidden")}});
}
function showAuthMessage(text,isError=false){
  const el=$(isError?"authError":"authMessage");
  if(!el)return;
  el.textContent=text;
  el.classList.remove("hidden");
}

function queueCloudSync(){
  // Während der Cloud-Auswahl darf niemals der lokale Stand versehentlich
  // die vorhandene Cloud-Version überschreiben.
  if(!authUser||!supabaseClient||!cloudSyncReady)return;
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer=setTimeout(()=>syncLocalToCloud(),700);
}

async function syncLocalToCloud(){
  if(!authUser||!supabaseClient||!cloudSyncReady)return;
  if(cloudSyncBusy){cloudSyncQueued=true;return;}
  cloudSyncBusy=true;
  try{
    const {data:sessionData,error:sessionError}=await supabaseClient.auth.getSession();
    if(sessionError)throw sessionError;
    const sessionUser=sessionData?.session?.user;
    if(!sessionData?.session?.access_token||!sessionUser){
      authUser=null;
      cloudSyncReady=false;
      updateAuthUi();
      throw new Error("Keine gültige Supabase-Session vorhanden.");
    }
    authUser=sessionUser;
    const {error}=await supabaseClient.from(CLOUD_TABLE).upsert({
      user_id:authUser.id,
      data:collectLocalAppData(),
      updated_at:new Date().toISOString()
    },{onConflict:"user_id"});
    if(error)throw error;
    setAuthStatus(`<strong>☁ Automatisch synchronisiert</strong><small>${escapeHtml(authUser.email||"")}</small>`);
  }catch(error){
    console.error("Cloud-Synchronisierung:",error);
    setAuthStatus(`<strong>⚠ Synchronisierung fehlgeschlagen</strong><small>${escapeHtml(error.message||"Unbekannter Fehler")}</small>` ,"error");
  }finally{
    cloudSyncBusy=false;
    if(cloudSyncQueued){cloudSyncQueued=false;queueCloudSync();}
  }
}

function openCloudChoiceModal({hasCloud,hasLocal,updatedAt=null}={}){
  const modal=$("cloudSyncModal");
  if(!modal)return;
  cloudChoiceOpen=true;
  $("cloudSyncTitle").textContent="Daten synchronisieren";
  $("cloudSyncText").textContent=hasCloud
    ? `Für diesen Account wurden bereits Cloud-Daten gefunden${updatedAt?` · zuletzt gespeichert ${new Date(updatedAt).toLocaleString("de-DE",{dateStyle:"short",timeStyle:"short"})}`:""}. Wähle, welche Version auf diesem Gerät verwendet werden soll.`
    : (hasLocal ? "Für diesen Account gibt es noch keinen Cloud-Stand. Du kannst die Daten dieses Geräts als neuen Cloud-Stand speichern oder den lokalen Inhalt leeren." : "Für diesen Account gibt es noch keinen Cloud-Stand. Du kannst jetzt einen neuen Cloud-Stand anlegen.");
  $("cloudSyncProgress")?.parentElement?.classList.add("hidden");
  $("cloudSyncContinueBtn")?.classList.add("hidden");
  $("cloudLoadBtn")?.classList.remove("hidden");
  $("cloudTakeoverBtn")?.classList.remove("hidden");
  const loadBtn=$("cloudLoadBtn");
  if(loadBtn){loadBtn.disabled=!hasCloud;loadBtn.textContent=hasCloud?"Cloud laden":"Cloud laden (leer)";}
  const takeBtn=$("cloudTakeoverBtn");
  if(takeBtn)takeBtn.textContent=hasCloud?"Cloud übernehmen":"Als Cloud speichern";
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
}

function openCloudProgressModal(title,text){
  const modal=$("cloudSyncModal");
  if(!modal)return;
  cloudChoiceOpen=false;
  $("cloudSyncTitle").textContent=title;
  $("cloudSyncText").textContent=text;
  $("cloudSyncProgress")?.parentElement?.classList.remove("hidden");
  if($("cloudSyncProgress"))$("cloudSyncProgress").style.width="45%";
  $("cloudLoadBtn")?.classList.add("hidden");
  $("cloudTakeoverBtn")?.classList.add("hidden");
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
}

function finishCloudSyncModal(success=true,text="Synchronisierung abgeschlossen."){
  const modal=$("cloudSyncModal");
  if(!modal)return;
  $("cloudSyncTitle").textContent=success?"Synchronisierung abgeschlossen":"Synchronisierung fehlgeschlagen";
  $("cloudSyncText").textContent=text;
  $("cloudSyncProgress")?.parentElement?.classList.remove("hidden");
  if($("cloudSyncProgress"))$("cloudSyncProgress").style.width=success?"100%":"0%";
  $("cloudLoadBtn")?.classList.add("hidden");
  $("cloudTakeoverBtn")?.classList.add("hidden");
  const btn=$("cloudSyncContinueBtn");
  if(btn){
    btn.textContent=success?"Fertig":"Schließen";
    btn.classList.remove("hidden");
    btn.onclick=()=>closeCloudSyncModal();
  }
  if(success)setTimeout(()=>{if(modal&&!modal.classList.contains("hidden"))closeCloudSyncModal()},900);
}
function closeCloudSyncModal(){
  const modal=$("cloudSyncModal");
  cloudChoiceOpen=false;
  if(modal){modal.classList.add("hidden");modal.setAttribute("aria-hidden","true");}
}

async function loadCloudDataForUser(){
  if(!supabaseClient||!authUser)return false;
  const {data:sessionData,error:sessionError}=await supabaseClient.auth.getSession();
  if(sessionError)throw sessionError;
  if(!sessionData?.session?.access_token)throw new Error("Keine gültige Supabase-Session vorhanden.");
  const {data:userData,error:userError}=await supabaseClient.auth.getUser();
  if(userError)throw userError;
  if(!userData?.user)throw new Error("Der angemeldete Benutzer konnte von Supabase nicht bestätigt werden.");
  authUser=userData.user;

  const {data,error}=await supabaseClient.from(CLOUD_TABLE)
    .select("data,updated_at")
    .eq("user_id",authUser.id)
    .maybeSingle();
  if(error)throw error;

  openCloudChoiceModal({
    hasCloud:!!(data?.data&&typeof data.data==="object"),
    hasLocal:hasMeaningfulLocalData(),
    updatedAt:data?.updated_at||null
  });
  window.__pendingCloudRow=data||null;
  return true;
}

async function chooseCloudLoad(){
  const row=window.__pendingCloudRow;
  closeCloudSyncModal();
  openCloudProgressModal("Cloud wird geladen","Der Cloud-Stand wird auf diesem Gerät übernommen.");
  try{
    replaceLocalAppData(row?.data&&typeof row.data==="object"?row.data:{});
    cloudSyncReady=true;
    refreshAfterCloudLoad();
    finishCloudSyncModal(true,row?.data?"Der aktuelle Cloud-Stand wurde auf dieses Gerät übernommen.":"Es gibt noch keinen Cloud-Stand. Dieses Gerät wurde geleert.");
  }catch(error){
    cloudSyncReady=false;
    finishCloudSyncModal(false,error.message||"Die Cloud konnte nicht geladen werden.");
  }
}

async function chooseCloudTakeover(){
  closeCloudSyncModal();
  openCloudProgressModal("Cloud wird übernommen","Die Daten dieses Geräts werden als aktueller Cloud-Stand gespeichert.");
  try{
    const local=collectLocalAppData();
    const {error}=await supabaseClient.from(CLOUD_TABLE).upsert({
      user_id:authUser.id,
      data:local,
      updated_at:new Date().toISOString()
    },{onConflict:"user_id"});
    if(error)throw error;
    cloudSyncReady=true;
    finishCloudSyncModal(true,"Die Daten dieses Geräts sind jetzt der aktuelle Cloud-Stand. Neue Änderungen werden automatisch synchronisiert.");
    setAuthStatus(`<strong>☁ Angemeldet & synchronisiert</strong><small>${escapeHtml(authUser.email||"")}</small>`);
  }catch(error){
    cloudSyncReady=false;
    finishCloudSyncModal(false,error.message||"Die Daten konnten nicht in die Cloud übernommen werden.");
  }
}

function refreshAfterCloudLoad(){
  try{
    renderTermTabs();applyTheme();migrateTimetableData();
    refreshSubjectSelects();renderGrades();renderHomework();renderStundenplan();
  }catch(error){console.error("Anzeige nach Cloud-Login konnte nicht komplett aktualisiert werden",error)}
}

function updateAuthUi(){
  const btn=$("authSettingsBtn");
  if(btn)btn.textContent=authUser?"Ausloggen":"Anmelden";
  if(authUser){
    setAuthStatus(`<strong>☁ Angemeldet</strong><small>${escapeHtml(authUser.email||"")}</small>`);
  }else{
    $("authStatusCard")?.classList.add("hidden");
  }
}

async function handleAuthStateChange(session,event=""){
  if(cloudAuthHandling)return;
  cloudAuthHandling=true;
  try{
    if(!session?.access_token){
      authUser=null;cloudSyncReady=false;updateAuthUi();return;
    }
    authUser=session.user||null;
    updateAuthUi();
    if(!authUser)return;
    cloudSyncReady=false;
    try{await loadCloudDataForUser();}
    catch(error){
      console.error("Cloud-Laden:",error);
      const message=String(error?.message||"Unbekannter Fehler");
      const isPermission=/permission denied|not allowed|row-level security|42501/i.test(message);
      setAuthStatus(`<strong>⚠ ${isPermission?"Cloud-Zugriff verweigert":"Cloud-Synchronisierung fehlgeschlagen"}</strong><small>${escapeHtml(message)}</small>` ,"error");
    }
  }finally{cloudAuthHandling=false;}
}

async function signIn(){
  clearAuthMessage();
  if(!supabaseClient){showAuthMessage("Die Cloud-Verbindung ist noch nicht eingerichtet.",true);return;}
  const email=$("authEmail")?.value.trim();
  const password=$("authPassword")?.value||"";
  if(!email||!password){showAuthMessage("Bitte E-Mail und Passwort eingeben.",true);return;}
  const btn=$("authSubmitBtn");btn.disabled=true;
  try{
    if(authMode==="signup"){
      const result=await supabaseClient.auth.signUp({email,password});
      if(result.error)throw result.error;
      if(result.data.user&&!result.data.session){
        showAuthMessage("Account erstellt! Wir haben dir eine Bestätigungs-E-Mail geschickt. Öffne den Link in der E-Mail und melde dich danach hier an.");
        $("authPassword").value="";return;
      }
      closeAuthModal();return;
    }
    const result=await supabaseClient.auth.signInWithPassword({email,password});
    if(result.error)throw result.error;
    if(result.data.user&&!result.data.user.email_confirmed_at){
      await supabaseClient.auth.signOut();
      showAuthMessage("Deine E-Mail-Adresse ist noch nicht bestätigt. Bitte öffne zuerst den Link aus der Bestätigungs-E-Mail.",true);return;
    }
    closeAuthModal();
  }catch(error){showAuthMessage(error.message||"Anmeldung fehlgeschlagen.",true)}
  finally{btn.disabled=false;}
}

async function resetPassword(){
  clearAuthMessage();
  const email=$("authEmail")?.value.trim();
  if(!email){showAuthMessage("Gib zuerst deine E-Mail-Adresse ein.",true);return;}
  try{
    const {error}=await supabaseClient.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+window.location.pathname});
    if(error)throw error;
    showAuthMessage("Wenn die Adresse zu einem Account gehört, wurde eine E-Mail zum Zurücksetzen verschickt.");
  }catch(error){showAuthMessage(error.message||"Das Zurücksetzen konnte nicht gestartet werden.",true)}
}

async function signOut(){
  if(!supabaseClient)return;
  const {error}=await supabaseClient.auth.signOut();
  if(error)showAuthMessage(error.message||"Abmelden fehlgeschlagen.",true);
  else{cloudSyncReady=false;closeAuthModal();updateAuthUi();}
}

function openAuthModal(){
  if(authUser){signOut();return;}
  clearAuthMessage();
  $("authEmail").value="";$("authPassword").value="";
  authMode="login";updateAuthModal();
  $("authModal").classList.remove("hidden");$("authModal").setAttribute("aria-hidden","false");
}
function closeAuthModal(){$("authModal")?.classList.add("hidden");$("authModal")?.setAttribute("aria-hidden","true")}
function updateAuthModal(){
  const signup=authMode==="signup";
  $("authModalTitle").textContent=signup?"Account erstellen":"Anmelden";
  $("authSubmitBtn").textContent=signup?"Account erstellen":"Anmelden";
  $("authToggleBtn").textContent=signup?"Schon einen Account? Anmelden":"Noch keinen Account? Account erstellen";
  $("authResetBtn").classList.toggle("hidden",signup);
  $("authPassword").autocomplete=signup?"new-password":"current-password";
}

function initCloudAuth(){
  if(cloudAuthInitialized)return;
  cloudAuthInitialized=true;
  if(!initSupabase()){
    const btn=$("authSettingsBtn");if(btn){btn.disabled=true;btn.title="Supabase-Konfiguration fehlt";}return;
  }
  supabaseClient.auth.onAuthStateChange((event,session)=>{
    setTimeout(()=>handleAuthStateChange(session,event),0);
  });
  supabaseClient.auth.getSession().then(({data,error})=>{
    if(error)throw error;
    return handleAuthStateChange(data?.session,"INITIAL_SESSION");
  }).catch(error=>{
    console.error("Supabase-Session konnte nicht geladen werden:",error);
    setAuthStatus(`<strong>⚠ Anmeldung konnte nicht geprüft werden</strong><small>${escapeHtml(error.message||"Unbekannter Fehler")}</small>`,"error");
  });
}
function getCategories(){return load("gradeCategories",defaultCategories).map(category=>({...category,weight:Math.min(2,Math.max(.1,Number(category.weight)||1))}))}
function saveCategories(categories){save("gradeCategories",categories)}
function getActiveSubjects(){
  const stored=load("activeSubjects",[]);
  const fromGrades=load("grades",[]).map(grade=>grade.fach);
  return [...new Set([...stored,...fromGrades])].filter(Boolean);
}
function saveActiveSubjects(subjects){save("activeSubjects",[...new Set(subjects)])}
function getSubjectWeights(){
  const weights=load("subjectWeights",{});
  return Object.fromEntries(Object.entries(weights).map(([subject,weight])=>[subject,Math.min(3,Math.max(0,Number(weight)||0))]));
}
function getSubjectWeight(subject){
  const weights=getSubjectWeights();
  return Object.prototype.hasOwnProperty.call(weights,subject)?weights[subject]:1;
}
function setSubjectWeight(subject,weight){
  const weights=getSubjectWeights();
  weights[subject]=Math.min(3,Math.max(0,Number(weight)));
  save("subjectWeights",weights);
}
function getSubjectIcon(subject){
  const key=load("subjectIcons",{})[subject]||subjectIcons[subject]||"book";
  return iconSvg[key]||iconSvg.book;
}
function saveSubjectIcon(subject,icon){const icons=load("subjectIcons",{});icons[subject]=icon;save("subjectIcons",icons)}
function setCustomIcon(icon){
  const button=$("customSubjectIcon");
  button.dataset.icon=icon;
  button.innerHTML=`${iconSvg[icon]}<span>✎</span>`;
}
function getGradeTerm(){return load("gradeTerm","1")}
function getSemesterCount(){return Math.max(1,Math.min(99,Number(load("semesterCount",2))||2))}
function visibleGrades(grades=load("grades",[])){
  const term=getGradeTerm();
  if(term==="end")return getSemesterCount()===1?grades.filter(grade=>Number(grade.semester||1)===1):grades;
  return grades.filter(grade=>Number(grade.semester||1)===Number(term));
}
function refreshSubjectSelects(){
  const subjects=[...new Set([...subjectsBayern,...getActiveSubjects()])];
  [$("hwFachSelect"),$("modalSubject")].filter(Boolean).forEach(select=>{
    const selected=select.value;
    select.innerHTML=subjects.map(subject=>`<option value="${escapeHtml(subject)}">${escapeHtml(subject)}</option>`).join("");
    if(subjects.includes(selected))select.value=selected;
  });
}
function getDecimalPlaces(){return Number(load("decimalPlaces",1))}
function formatAverage(value){
  if(value===null||value===undefined||!Number.isFinite(value))return "-";
  const places=getDecimalPlaces();
  return places===0?String(Math.round(value)):value.toFixed(places);
}
function noteHue(value){
  const note=Math.min(6,Math.max(1,Number(value)||1));
  return (125-(note-1)*25).toFixed(1);
}
function applyTheme(key=load("appTheme","green")){
  const theme=appThemes.find(item=>item.key===key)||appThemes[0];
  document.documentElement.dataset.theme=theme.key;
  document.documentElement.style.setProperty("--green",theme.colors.green);
  document.documentElement.style.setProperty("--accent",theme.colors.accent);
  document.documentElement.style.setProperty("--surface-3",theme.colors.surface3);
  document.documentElement.style.setProperty("--theme-glow",theme.colors.green);
}

// ----- Init UI -----
document.addEventListener("DOMContentLoaded",()=>{
  initCloudAuth();
  $("authSettingsBtn")?.addEventListener("click",openAuthModal);
  $("authSubmitBtn")?.addEventListener("click",signIn);
  $("authToggleBtn")?.addEventListener("click",()=>{authMode=authMode==="login"?"signup":"login";clearAuthMessage();updateAuthModal()});
  $("authResetBtn")?.addEventListener("click",resetPassword);
  $("cloudLoadBtn")?.addEventListener("click",chooseCloudLoad);
  $("cloudTakeoverBtn")?.addEventListener("click",chooseCloudTakeover);
  [$("authEmail"),$("authPassword")].forEach(input=>input?.addEventListener("keydown",event=>{if(event.key==="Enter")signIn()}));
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js",{updateViaCache:"none"})
      .then(registration=>registration.update())
      .catch(()=>{});
  }

  let installPrompt;
  const installBtn = $("installBtn");
  const isStandalone=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===true;
  if(isStandalone)installBtn.classList.add("hidden");
  installBtn.addEventListener("click", async()=>{
    if(!installPrompt) return;
    installPrompt.prompt();
    installPrompt = null;
    installBtn.classList.add("hidden");
  });
  window.addEventListener("beforeinstallprompt", event=>{
    event.preventDefault();
    installPrompt = event;
  });

  // Bottom navigation – aktiven Reiter über Reloads hinweg behalten
  document.querySelectorAll(".nav-item").forEach(t=>{
    t.addEventListener("click",()=> {
      document.querySelectorAll(".nav-item").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      save("activePage",t.dataset.page);
      showPage(t.dataset.page);
    });
  });

  // Fill subject selects
  const hwFachSelect = $("hwFachSelect");
  const modalSubject = $("modalSubject");
  refreshSubjectSelects();

  $("termTabs")?.addEventListener("click",event=>{
    const tab=event.target.closest(".term-tab");
    if(!tab)return;
    save("gradeTerm",tab.dataset.term);
    renderTermTabs();
    renderGrades();
  });
  $("customSubjectIcon")?.addEventListener("click",()=>{
    $("iconOptions").classList.toggle("open");
  });
  $("iconOptions")?.addEventListener("click",event=>{
    const option=event.target.closest("[data-icon-choice]");
    if(!option)return;
    const button=$("customSubjectIcon");
    setCustomIcon(option.dataset.iconChoice);
    document.querySelectorAll("[data-icon-choice]").forEach(item=>item.classList.toggle("selected",item===option));
    $("iconOptions").classList.remove("open");
  });

  $("settingsBtn")?.addEventListener("click",openNotesSettings);
  $("appSettingsBtn")?.addEventListener("click",openSettings);
  $("addSubjectBtn")?.addEventListener("click",openSubjectPicker);
  $("noteInfoBtn")?.addEventListener("click",()=>$("noteInfo").classList.toggle("hidden"));
  $("addCategoryBtn")?.addEventListener("click",addCategory);
  $("addCustomSubjectBtn")?.addEventListener("click",addCustomSubject);
  $("schnittPlusSchnitt")?.addEventListener("change",event=>{
    save("schnittPlusSchnitt",event.target.checked);
    renderGrades();
  });
  $("decimalPlaces")?.addEventListener("change",event=>{save("decimalPlaces",Number(event.target.value));renderGrades();computeAll()});
  $("resetThemeBtn")?.addEventListener("click",()=>{save("appTheme","green");applyTheme("green");renderThemeOptions()});
  $("semesterCount")?.addEventListener("change",event=>{
    const count=Math.max(1,Math.min(99,Number(event.target.value)||1));
    save("semesterCount",count);
    if(Number(getGradeTerm())>count)save("gradeTerm","1");
    renderTermTabs();
    renderGrades();
  });
  $("hwTimetableBtn")?.addEventListener("click",openHomeworkTimetable);
  $("homeworkConfirmBtn")?.addEventListener("click",confirmHomeworkLesson);
  $("timetablePrevWeek")?.addEventListener("click",()=>shiftTimetableWeek(-1));
  $("timetableNextWeek")?.addEventListener("click",()=>shiftTimetableWeek(1));
  $("timetableTodayWeek")?.addEventListener("click",goToCurrentWeek);
  $("resetTimetableWeekBtn")?.addEventListener("click",resetTimetableWeekOnly);
  $("resetTimetableBtn")?.addEventListener("click",resetTimetable);
  $("importTimetableBtn")?.addEventListener("click",()=>$("timetableImageInput").click());
  $("timetableImageInput")?.addEventListener("change",event=>{
    const file=event.target.files?.[0];
    if(file)importTimetableScreenshot(file);
    event.target.value="";
  });
  $("periods")?.addEventListener("change",event=>{
    const periods=Math.min(15,Math.max(1,Number(event.target.value)||6));
    event.target.value=periods;
    const key=getCurrentTimetableWeekKey();
    const week=getTimetableWeek(key);
    week.periods=periods;
    saveTimetableWeek(key,week);
    save("timetablePeriods",periods);
    buildTimetable();
  });
  $("autoPeriodsBtn")?.addEventListener("click",setTimetablePeriodsAutomatically);
  $("subjectWeightRange")?.addEventListener("input",event=>{
    const value=Math.min(3,Math.max(0,Number(event.target.value)));
    $("subjectWeightValue").textContent=`${value.toFixed(1).replace(".0","")}×`;
  });

  // Load existing data
  renderTermTabs();
  applyTheme();
  migrateTimetableData();
  const savedPeriods=Math.min(15,Math.max(1,Number(load("timetablePeriods",6))||6));
  $("periods").value=savedPeriods;
  renderGrades();
  renderHomework();
  renderStundenplan();
  const initialPage=load("activePage","noten");
  document.querySelectorAll(".nav-item").forEach(item=>item.classList.toggle("active",item.dataset.page===initialPage));
  showPage(["noten","hausaufgaben","stundenplan"].includes(initialPage)?initialPage:"noten");
});

function renderTermTabs(){
  const count=getSemesterCount();
  const tabs=[...Array(count)].map((_,index)=>`<button class="term-tab" data-term="${index+1}" type="button">${index+1}. HJ</button>`);
  tabs.push('<button class="term-tab" data-term="end" type="button">Ende</button>');
  $("termTabs").innerHTML=tabs.join("");
  $("termTabs").style.justifyContent=count<=5?"center":"flex-start";
  $("termTabs").querySelector(`[data-term="${getGradeTerm()}"]`)?.classList.add("active");
}

// ----- Navigation -----
function showPage(id){

  function renderTermTabs(){
    const count=getSemesterCount();
    document.querySelectorAll(".term-tab").forEach(tab=>{
      const visible=tab.dataset.term!=="2"||count===2;
      tab.classList.toggle("hidden",!visible);
      tab.classList.toggle("active",tab.dataset.term===getGradeTerm());
    });
  }
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  $(id).classList.remove("hidden");
  save("activePage",id);
  $("addSubjectBtn").classList.toggle("hidden",id!=="noten");
  $("settingsBtn").classList.toggle("hidden",id!=="noten");
  $("timetableHint").classList.toggle("hidden",!(id==="stundenplan"&&homeworkTimetableMode));
  if(id==="stundenplan" && window.Tesseract?.createWorker){
    getTimetableOcrWorker().catch(()=>{});
  }
}

// ----- NOTEN -----
function addGrade(){
  if(getGradeTerm()==="end")return;
  const fach = currentSubject;
  const kategorie = $("kategorieSelect").value;
  const note = selectedGrade;
  if(!fach || !note) return;
  const grades = load("grades",[]);
  const currentTerm=Number(getGradeTerm());
  const gradeData={fach,kategorie,note,semester:Number.isInteger(currentTerm)&&currentTerm>=1&&currentTerm<=getSemesterCount()?currentTerm:1,info:$("noteInfo").value.trim(),ts:Date.now()};
  if(editingGradeIndex===null)grades.push(gradeData);
  else {gradeData.semester=grades[editingGradeIndex].semester||gradeData.semester;gradeData.ts=grades[editingGradeIndex].ts||Date.now();grades[editingGradeIndex]=gradeData}
  save("grades",grades);
  selectedGrade = null;
  editingGradeIndex = null;
  $("noteInfo").value="";
  $("noteInfo").classList.add("hidden");
  $("saveGradeBtn").textContent="Note speichern";
  $("cancelEditBtn").classList.add("hidden");
  renderGrades();
  renderSubjectModal();
}

function renderGrades(){
  const allGrades = load("grades",[]).map(grade=>grade.semester?grade:{...grade,semester:1});
  const grades = visibleGrades(allGrades);
  const grouped = getActiveSubjects().map(fach=>({fach,grades:grades.filter(g=>g.fach===fach)})).sort((a,b)=>{
    const average=item=>calculateAverage(item.grades)??Infinity;
    return average(a)-average(b);
  });
  $("subjectsList").innerHTML = grouped.map(({fach,grades:subjectGrades})=>{
    const average = calculateAverage(subjectGrades);
    const note = formatAverage(average).replace("-","–");
    const tone = average ? `note-${Math.round(average)}` : "empty";
    const hasSchoolGrades=subjectGrades.some(grade=>grade.kategorie==="schulaufgaben");
    const orderedGrades=[...subjectGrades].sort((a,b)=>(a.kategorie==="schulaufgaben"?0:1)-(b.kategorie==="schulaufgaben"?0:1));
    const gradeDots=orderedGrades.map(grade=>{
      const gradeValue=String(Math.round(Number(grade.note)||0));
      if(grade.kategorie==="schulaufgaben"){
        return `<span class="mini-note note-${Math.round(grade.note)} is-school" style="--note-hue:${noteHue(grade.note)}" title="Schulaufgabe: ${gradeValue}">${gradeValue}</span>`;
      }
      return `<span class="grade-number note-${Math.round(grade.note)}" style="--note-hue:${noteHue(grade.note)}" title="${escapeHtml(grade.kategorie||"Note")}: ${gradeValue}">${gradeValue}</span>`;
    }).join("");
    const subjectWeight=getSubjectWeight(fach);
    const weightBadge=subjectWeight!==1?`<span class="subject-weight-badge">${subjectWeight.toFixed(1).replace(".0","")}×</span>`:"";
    const emptyHue=load("appTheme","green")==="blue"?198:load("appTheme","green")==="purple"?265:load("appTheme","green")==="amber"?38:load("appTheme","green")==="forest"?145:125;
    return `<div class="subject-card" role="button" tabindex="0" onclick="openSubjectModal('${escapeHtml(fach)}')" onkeydown="if(event.key==='Enter')openSubjectModal('${escapeHtml(fach)}')"><span class="subject-symbol">${getSubjectIcon(fach)}</span><span class="subject-name">${escapeHtml(fach)}${weightBadge}</span><button class="subject-edit" type="button" onclick="event.stopPropagation();renameSubject('${escapeHtml(fach)}')" aria-label="${escapeHtml(fach)} bearbeiten">✎</button><span class="note-circle ${tone}" style="--note-hue:${average?noteHue(average):emptyHue}" aria-label="${hasSchoolGrades?"Fachdurchschnitt mit Schulaufgaben":"Fachdurchschnitt"}">${note}</span><span class="subject-meta"><span class="grade-dots">${gradeDots||"Noch keine Noten"}</span><b>›</b></span></div>`;
  }).join("") || "<p class=\"empty-state\">Noch keine Fächer. Tippe oben auf +.</p>";
  $("gradeCount").textContent = `${grades.length} ${grades.length===1?"NOTE":"NOTEN"}`;
  const weightedSubjects=grouped.map(item=>({average:calculateAverage(item.grades),weight:getSubjectWeight(item.fach)})).filter(item=>item.average!==null&&item.weight>0);
  const overallWeight=weightedSubjects.reduce((sum,item)=>sum+item.weight,0);
  const overall=overallWeight?weightedSubjects.reduce((sum,item)=>sum+item.average*item.weight,0)/overallWeight:null;
  $("overallAvg").textContent=formatAverage(overall).replace("-","–");
  const term=getGradeTerm();
  $("averageEyebrow").textContent=term==="end"?"ENDNOTE":`${term}. HALBJAHR`;
  $("saveGradeBtn").classList.toggle("hidden",getGradeTerm()==="end");
  $("kategorieSelect").classList.toggle("hidden",getGradeTerm()==="end");
  $("noteInfoBtn").classList.toggle("hidden",getGradeTerm()==="end");
  $("cancelEditBtn").classList.toggle("hidden",getGradeTerm()==="end"||editingGradeIndex===null);
  refreshSubjectSelects();
  computeAll();
}

function removeGrade(index){
  const grades = load("grades",[]);
  grades.splice(index,1);
  save("grades",grades);
  renderGrades();
  if(currentSubject)renderSubjectModal();
}

let currentSubject = null;
let selectedGrade = null;
let homeworkTimetableMode = false;
let editingGradeIndex = null;
function openSubjectModal(subject){
  currentSubject = subject;
  selectedGrade = null;
  editingGradeIndex = null;
  $("subjectModalTitle").textContent = subject;
  $("subjectModal").classList.remove("hidden");
  $("subjectModal").setAttribute("aria-hidden","false");
  $("noteInfo").value="";
  $("noteInfo").classList.add("hidden");
  renderCategorySelect();
  renderSubjectModal();
}
function closeSubjectModal(){
  cancelGradeEdit();
  $("subjectModal").classList.add("hidden");
  $("subjectModal").setAttribute("aria-hidden","true");
  currentSubject = null;
}
function deleteCurrentSubject(){
  if(!currentSubject)return;
  const subject=currentSubject;
  saveActiveSubjects(getActiveSubjects().filter(item=>item!==subject));
  save("grades",load("grades",[]).filter(grade=>grade.fach!==subject));
  closeSubjectModal();
  renderGrades();
}
function renderSubjectModal(){
  if(!currentSubject)return;

  $("gradePicker").innerHTML=[1,2,3,4,5,6].map(note=>
    `<button class="grade-option note-${note} ${selectedGrade===note?"selected":""}" style="--note-hue:${noteHue(note)}" type="button" onclick="selectGrade(${note})">${note}</button>`
  ).join("");

  const grades=visibleGrades(load("grades",[]).map((grade,index)=>({...grade,semester:grade.semester||1,index})))
    .map((grade,index)=>({...grade,index}))
    .filter(grade=>grade.fach===currentSubject);

  const categories=getCategories();
  $("subjectGrades").innerHTML=categories.map(category=>{
    const categoryGrades=grades.filter(grade=>grade.kategorie===category.key);
    return `<section class="grade-category">
      <h4>${escapeHtml(category.label)}</h4>
      <div class="category-grades">
        ${categoryGrades.length
          ? categoryGrades.map(grade=>`<div class="grade-item" tabindex="0" role="button" onclick="toggleGradeActions(this,event)" onkeydown="if(event.key==='Enter')toggleGradeActions(this,event)">
              ${grade.kategorie==="schulaufgaben"
                ? `<span class="mini-note is-school" style="--note-hue:${noteHue(grade.note)}" aria-label="Schulaufgabe Note ${Math.round(Number(grade.note)||0)}">${Math.round(Number(grade.note)||0)}</span>`
                : `<span class="grade-number" style="--note-hue:${noteHue(grade.note)}" aria-label="${escapeHtml(grade.kategorie||"Note")} Note ${Math.round(Number(grade.note)||0)}">${Math.round(Number(grade.note)||0)}</span>`}
              ${grade.info?`<small>${escapeHtml(grade.info)}</small>`:""}
              <div class="grade-actions hidden ${getGradeTerm()==="end"?"readonly-actions":""}">
                ${getGradeTerm()!=="end"?`<button class="btn ghost" type="button" onclick="event.stopPropagation();editGrade(${grade.index})">Bearbeiten</button><button class="btn ghost" type="button" onclick="event.stopPropagation();removeGrade(${grade.index})">Löschen</button>`:""}
              </div>
            </div>`).join("")
          : `<span class="no-grades">Keine Noten</span>`}
      </div>
    </section>`;
  }).join("");
  const readonly=getGradeTerm()==="end";
  $("gradePicker").classList.toggle("hidden",readonly);
  $("kategorieSelect").classList.toggle("hidden",readonly);
  $("noteInfoBtn").classList.toggle("hidden",readonly);
  $("saveGradeBtn").classList.toggle("hidden",readonly);
}

function toggleGradeActions(element,event){
  event.stopPropagation();
  document.querySelectorAll(".grade-item.expanded").forEach(item=>{
    if(item!==element){
      item.classList.remove("expanded");
      item.querySelector(".grade-actions")?.classList.add("hidden");
    }
  });
  element.classList.toggle("expanded");
  element.querySelector(".grade-actions")?.classList.toggle("hidden");
}
function selectGrade(note){selectedGrade=note;renderSubjectModal()}
function editGrade(index){
  if(getGradeTerm()==="end")return;
  const grade=load("grades",[])[index];
  if(!grade)return;
  editingGradeIndex=index;
  selectedGrade=Number(grade.note);
  $("kategorieSelect").value=grade.kategorie;
  $("noteInfo").value=grade.info||"";
  $("noteInfo").classList.toggle("hidden",!grade.info);
  $("saveGradeBtn").textContent="Änderung speichern";
  $("cancelEditBtn").classList.remove("hidden");
  renderSubjectModal();
}
function cancelGradeEdit(){
  editingGradeIndex=null;
  selectedGrade=null;
  if($("saveGradeBtn"))$("saveGradeBtn").textContent="Note speichern";
  if($("cancelEditBtn"))$("cancelEditBtn").classList.add("hidden");
}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,character=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"})[character])}
function calculateAverage(grades){
  if(!grades.length)return null;
  const average=items=>items.length?items.reduce((sum,grade)=>sum+Number(grade.note),0)/items.length:null;
  const categories=getCategories();
  const schoolAverage=average(grades.filter(grade=>grade.kategorie==="schulaufgaben"));
  const otherGrades=grades.filter(grade=>grade.kategorie!=="schulaufgaben");
  if(load("schnittPlusSchnitt",false)){
    const categoryWeights=new Map(categories.map(category=>[category.key,category.weight]));
    const weightedRestTotal=otherGrades.reduce((sum,grade)=>sum+Number(grade.note)*(categoryWeights.get(grade.kategorie)||1),0);
    const restAverage=otherGrades.length?weightedRestTotal/otherGrades.length:null;
    if(schoolAverage!==null&&restAverage!==null)return (schoolAverage*2+restAverage)/3;
    return schoolAverage??restAverage??null;
  }
  let weightedValue=0;
  let weightTotal=0;
  categories.filter(category=>category.key!=="schulaufgaben").forEach(category=>{
    const categoryAverage=average(otherGrades.filter(grade=>grade.kategorie===category.key));
    if(categoryAverage!==null){weightedValue+=categoryAverage*category.weight;weightTotal+=category.weight;}
  });
  const otherAverage=weightTotal?weightedValue/weightTotal:null;
  if(schoolAverage!==null&&otherAverage!==null){
    const schoolWeight=categories.find(category=>category.key==="schulaufgaben")?.weight||1;
    return (schoolAverage*schoolWeight+otherAverage*weightTotal)/(schoolWeight+weightTotal);
  }
  return schoolAverage??otherAverage??null;
}
function renderCategorySelect(){
  $("kategorieSelect").innerHTML=getCategories().map(category=>`<option value="${category.key}">${category.label}</option>`).join("");
}
function renderCategoryWeights(){
  $("categoryWeights").innerHTML=getCategories().map(category=>`<label class="category-weight"><span>${category.label}</span><input type="number" min="0.1" max="2" step="0.1" value="${category.weight}" data-category-weight="${category.key}"><small>×</small></label>`).join("");
  $("categoryWeights").querySelectorAll("input").forEach(input=>input.addEventListener("input",()=>{
    const categories=getCategories();
    const category=categories.find(item=>item.key===input.dataset.categoryWeight);
    category.weight=Math.min(2,Math.max(.1,Number(input.value)||1));
    input.value=category.weight;
    saveCategories(categories);
    computeAll();
    renderGrades();
  }));
}
function openSettings(){
  renderThemeOptions();
  $("settingsModal").classList.remove("hidden");
  $("settingsModal").setAttribute("aria-hidden","false");
}
function openNotesSettings(){
  $("decimalPlaces").value=String(getDecimalPlaces());
  $("semesterCount").value=String(getSemesterCount());
  renderCategoryWeights();
  $("schnittPlusSchnitt").checked=load("schnittPlusSchnitt",false);
  $("notesSettingsModal").classList.remove("hidden");
  $("notesSettingsModal").setAttribute("aria-hidden","false");
}
function renderThemeOptions(){
  const active=load("appTheme","green");
  $("themeOptions").innerHTML=appThemes.map(theme=>`<button class="theme-option ${theme.key===active?"selected":""}" type="button" data-theme-choice="${theme.key}"><span style="--theme-swatch:${theme.colors.green}"></span>${theme.label}</button>`).join("");
  $("themeOptions").querySelectorAll("[data-theme-choice]").forEach(button=>button.addEventListener("click",()=>{save("appTheme",button.dataset.themeChoice);applyTheme(button.dataset.themeChoice);renderThemeOptions()}));
}
function closeSettings(){$("settingsModal").classList.add("hidden");$("settingsModal").setAttribute("aria-hidden","true");computeAll()}
function closeNotesSettings(){$("notesSettingsModal").classList.add("hidden");$("notesSettingsModal").setAttribute("aria-hidden","true");computeAll()}
function addCategory(){
  const label=$("newCategoryName").value.trim();
  if(!label)return;
  const categories=getCategories();
  categories.push({key:`custom_${Date.now()}`,label,weight:1});
  saveCategories(categories);
  $("newCategoryName").value="";
  renderCategoryWeights();
  renderCategorySelect();
}
function openSubjectPicker(){
  const active=getActiveSubjects();
  $("subjectOptions").innerHTML=subjectsBayern.filter(subject=>!active.includes(subject)).map(subject=>`<button class="subject-option" type="button" onclick="addSubject('${subject}')"><span class="subject-option-main"><b class="subject-option-icon">${getSubjectIcon(subject)}</b>${escapeHtml(subject)}</span><span>+</span></button>`).join("")||"<p class=\"empty-state\">Alle Vorlagen hinzugefügt.</p>";
  const selected=$("customSubjectIcon").dataset.icon||customSubjectIcons[0];
  setCustomIcon(selected);
  $("iconOptions").innerHTML=customSubjectIcons.map(icon=>`<button class="icon-option ${icon===selected?"selected":""}" data-icon-choice="${icon}" type="button" aria-label="Symbol auswählen">${iconSvg[icon]}</button>`).join("");
  $("iconOptions").classList.remove("open");
  $("subjectPickerModal").classList.remove("hidden");
  $("subjectPickerModal").setAttribute("aria-hidden","false");
}
function closeSubjectPicker(){$("subjectPickerModal").classList.add("hidden");$("subjectPickerModal").setAttribute("aria-hidden","true")}
function addSubject(subject){saveActiveSubjects([...getActiveSubjects(),subject]);renderGrades();openSubjectPicker()}
function addCustomSubject(){
  const name=$("customSubjectName").value.trim();
  if(!name)return;
  saveSubjectIcon(name,$("customSubjectIcon").dataset.icon||"📘");
  addSubject(name);
  $("customSubjectName").value="";
  setCustomIcon(customSubjectIcons[0]);
}
let subjectToRename=null;
function renameSubject(subject){
  subjectToRename=subject;
  $("renameSubjectInput").value=subject;
  const weight=getSubjectWeight(currentSubject);
  $("subjectWeightRange").value=String(weight);
  $("subjectWeightValue").textContent=`${weight.toFixed(1).replace(".0","")}×`;
  $("renameModal").classList.remove("hidden");
  $("renameModal").setAttribute("aria-hidden","false");
}
function closeRenameModal(){$("renameModal").classList.add("hidden");$("renameModal").setAttribute("aria-hidden","true");subjectToRename=null}
function saveRenamedSubject(){
  const name=$("renameSubjectInput").value.trim();
  if(!subjectToRename||!name||name===subjectToRename)return closeRenameModal();
  const subject=subjectToRename;
  saveActiveSubjects(getActiveSubjects().map(item=>item===subject?name:item));
  const grades=load("grades",[]).map(grade=>grade.fach===subject?{...grade,fach:name}:grade);
  save("grades",grades);
  const weights=getSubjectWeights();
  weights[name]=Math.min(3,Math.max(0,Number($("subjectWeightRange").value)));
  if(subject!==name)delete weights[subject];
  save("subjectWeights",weights);
  renderGrades();
  closeRenameModal();
}

function labelFor(key){
  return getCategories().find(category=>category.key===key)?.label||key;
}

// ----- Berechnung (verschachtelt) -----
function computeAll(){
  const grades = visibleGrades(load("grades",[]));
  const avg = arr => arr.length ? arr.reduce((s,x)=>s+x.note,0)/arr.length : null;
  const schul = grades.filter(g=>g.kategorie==="schulaufgaben");
  const others = grades.filter(g=>g.kategorie!=="schulaufgaben");
  const avgSchul = avg(schul);
  const categories=getCategories();
  if(load("schnittPlusSchnitt",false)){
    const categoryWeights=new Map(categories.map(category=>[category.key,category.weight]));
    const weightedRestTotal=others.reduce((sum,grade)=>sum+Number(grade.note)*(categoryWeights.get(grade.kategorie)||1),0);
    const avgOthers=others.length?weightedRestTotal/others.length:null;
    const final=avgSchul!==null&&avgOthers!==null?(avgSchul*2+avgOthers)/3:(avgSchul??avgOthers);
    $("avgSchul").innerText=formatAverage(avgSchul);
    $("avgOthers").innerText=formatAverage(avgOthers);
    $("finalAvg").innerText=formatAverage(final);
    return;
  }
  let sumW = 0, sumV = 0;
  categories.filter(category=>category.key!=="schulaufgaben").forEach(category=>{
    const categoryAverage=avg(others.filter(grade=>grade.kategorie===category.key));
    if(categoryAverage!==null){sumW+=category.weight;sumV+=categoryAverage*category.weight;}
  });
  const avgOthers = sumW ? (sumV / sumW) : null;
  let final = null;
  if(load("schnittPlusSchnitt",false) && avgSchul!==null && avgOthers!==null){
    const schoolWeight=categories.find(category=>category.key==="schulaufgaben")?.weight||1;
    final=(avgSchul*schoolWeight+avgOthers)/(schoolWeight+1);
  } else if(avgSchul!==null && avgOthers!==null){
    const schoolWeight=categories.find(category=>category.key==="schulaufgaben")?.weight||1;
    final=(avgSchul*schoolWeight+avgOthers*sumW)/(schoolWeight+sumW);
  } else if(avgSchul!==null){
    final = avgSchul;
  } else if(avgOthers!==null){
    final = avgOthers;
  }

  $("avgSchul").innerText = formatAverage(avgSchul);
  $("avgOthers").innerText = formatAverage(avgOthers);
  $("finalAvg").innerText = formatAverage(final);
}

// ----- HAUSAUFGABEN -----
function addHomework(){
  const fach = $("hwFachSelect").value;
  const text = $("hwText").value.trim();
  const datum = $("hwDatum").value;
  if(!text) return alert("Beschreibung eingeben");
  const list = load("homework",[]);
  list.push({fach,text,datum,ts:Date.now()});
  save("homework",list);
  $("hwText").value=""; $("hwDatum").value="";
  renderHomework();
}

function openHomeworkTimetable(){
  homeworkTimetableMode=true;
  document.querySelectorAll(".nav-item").forEach(item=>item.classList.toggle("active",item.dataset.page==="stundenplan"));
  showPage("stundenplan");
  buildTimetable();
}
function closeHomeworkTimetable(){
  $("homeworkTimetableModal").classList.add("hidden");
  $("homeworkTimetableModal").setAttribute("aria-hidden","true");
}
function selectHomeworkLesson(day,period){
  const entry=load("timetable",{})[`${day}-${period}`];
  const subject=typeof entry==="string"?entry:entry?.subject;
  if(!subject){alert("Bitte wähle eine belegte Stunde aus.");return}
  const active=getActiveSubjects();
  if(!active.includes(subject))saveActiveSubjects([...active,subject]);
  const option=[...$("hwFachSelect").options].find(item=>item.value===subject);
  if(!option){const newOption=document.createElement("option");newOption.value=subject;newOption.textContent=subject;$("hwFachSelect").appendChild(newOption)}
  $("hwFachSelect").value=subject;
  const today=new Date();
  const target=new Date(today);
  const distance=((day+1)-today.getDay()+7)%7||7;
  target.setDate(today.getDate()+distance);
  $("hwDatum").value=target.toISOString().slice(0,10);
  homeworkTimetableMode=false;
  document.querySelectorAll(".nav-item").forEach(item=>item.classList.toggle("active",item.dataset.page==="hausaufgaben"));
  showPage("hausaufgaben");
}

function homeworkRelativeDate(dateString){
  if(!dateString)return "Ohne Termin";
  const [y,m,d]=dateString.split("-").map(Number);
  const target=new Date(y,m-1,d); target.setHours(0,0,0,0);
  const now=new Date(); now.setHours(0,0,0,0);
  const diff=Math.round((target-now)/86400000);
  if(diff===0)return "Heute";
  if(diff===1)return "Morgen";
  if(diff===2)return "Übermorgen";
  if(diff>2)return `in ${diff} Tagen`;
  if(diff===-1)return "Gestern";
  return `seit ${Math.abs(diff)} Tagen überfällig`;
}
function formatHomeworkDate(dateString){
  if(!dateString)return "";
  const [y,m,d]=dateString.split("-");
  return `${d}.${m}.${y.slice(-2)}`;
}
function renderHomework(){
  const list=load("homework",[]).sort((a,b)=>(a.datum||"9999-12-31").localeCompare(b.datum||"9999-12-31"));
  if(!list.length){$("hwList").innerHTML="<p>Keine Hausaufgaben</p>";return;}
  $("hwList").innerHTML=list.map(h=>`<div class="homework-item"><div class="homework-main"><strong>${escapeHtml(h.fach)}</strong><span>${escapeHtml(h.text)}</span></div><div class="homework-due"><b>${homeworkRelativeDate(h.datum)}</b>${h.datum?`<small>${formatHomeworkDate(h.datum)}</small>`:""}</div><button class="btn ghost" onclick="removeHW(${h.ts})">Erledigt</button></div>`).join("");
}
function removeHW(ts){
  let list = load("homework",[]);
  list = list.filter(h=>h.ts!==ts);
  save("homework",list);
  renderHomework();
}

// ----- STUNDENPLAN -----
const TIMETABLE_DAYS = [
  {short:"Mo.", name:"Montag"},
  {short:"Di.", name:"Dienstag"},
  {short:"Mi.", name:"Mittwoch"},
  {short:"Do.", name:"Donnerstag"},
  {short:"Fr.", name:"Freitag"}
];
const TIMETABLE_WEEK_DEFAULT_PERIODS = 6;
let currentCell = null;
let currentTimetableWeekKey = null;


function pad2(value){ return String(value).padStart(2,"0"); }

function dateKeyLocal(date){
  return `${date.getFullYear()}-${pad2(date.getMonth()+1)}-${pad2(date.getDate())}`;
}

function formatLongDate(dateString){
  if(!dateString)return "";
  const [y,m,d]=String(dateString).split("-").map(Number);
  if(!y||!m||!d)return "";
  return `${pad2(d)}.${pad2(m)}.${y}`;
}

function formatShortDate(dateString){
  if(!dateString)return "";
  const [y,m,d]=String(dateString).split("-").map(Number);
  if(!y||!m||!d)return "";
  return `${pad2(d)}.${pad2(m)}.${String(y).slice(-2)}`;
}

function isoWeekInfo(input=new Date()){
  const date = new Date(input);
  date.setHours(12,0,0,0);
  const dayNr = date.getDay() || 7;
  date.setDate(date.getDate() + 4 - dayNr);
  const year = date.getFullYear();
  const yearStart = new Date(year,0,1);
  const week = Math.ceil((((date-yearStart)/86400000)+1)/7);
  return {year,week,key:`${year}-W${pad2(week)}`};
}

function isoWeekMonday(year,week){
  const simple = new Date(year,0,4,12,0,0,0);
  const day = simple.getDay() || 7;
  simple.setDate(simple.getDate() - day + 1 + (Number(week)-1)*7);
  return simple;
}

function datesForWeek(key){
  const match=String(key||"").match(/^(\d{4})-W(\d{1,2})$/);
  if(!match)return datesForWeek(isoWeekInfo().key);
  const monday=isoWeekMonday(Number(match[1]),Number(match[2]));
  return Array.from({length:5},(_,i)=>{
    const d=new Date(monday);
    d.setDate(monday.getDate()+i);
    return dateKeyLocal(d);
  });
}

function normalizeWeekKey(key){
  return /^\d{4}-W\d{2}$/.test(String(key||""))?String(key):isoWeekInfo().key;
}

function getTimetableWeeks(){
  const weeks=load("timetableWeeks",{});
  return weeks&&typeof weeks==="object"&&!Array.isArray(weeks)?weeks:{};
}

function saveTimetableWeeks(weeks){
  save("timetableWeeks",weeks);
}

function getCurrentTimetableWeekKey(){
  if(!currentTimetableWeekKey){
    currentTimetableWeekKey=normalizeWeekKey(load("currentTimetableWeek",isoWeekInfo().key));
  }
  return currentTimetableWeekKey;
}

function setCurrentTimetableWeek(key){
  currentTimetableWeekKey=normalizeWeekKey(key);
  save("currentTimetableWeek",currentTimetableWeekKey);
  buildTimetable();
}

function defaultWeekData(key,periods=TIMETABLE_WEEK_DEFAULT_PERIODS){
  const normalized=normalizeWeekKey(key);
  return {
    dates:datesForWeek(normalized),
    entries:{},
    periods:Math.min(15,Math.max(1,Number(periods)||TIMETABLE_WEEK_DEFAULT_PERIODS))
  };
}

function getTimetableWeek(key=getCurrentTimetableWeekKey()){
  const normalized=normalizeWeekKey(key);
  const weeks=getTimetableWeeks();
  const fallbackPeriods=Math.min(15,Math.max(1,Number(load("timetablePeriods",TIMETABLE_WEEK_DEFAULT_PERIODS))||TIMETABLE_WEEK_DEFAULT_PERIODS));
  const existing=weeks[normalized];
  if(existing&&typeof existing==="object"){
    return {
      ...defaultWeekData(normalized,existing.periods||fallbackPeriods),
      ...existing,
      dates:Array.isArray(existing.dates)&&existing.dates.length===5?existing.dates:datesForWeek(normalized),
      entries:existing.entries&&typeof existing.entries==="object"?existing.entries:{}
    };
  }
  return defaultWeekData(normalized,fallbackPeriods);
}

function saveTimetableWeek(key,data){
  const normalized=normalizeWeekKey(key);
  const weeks=getTimetableWeeks();
  weeks[normalized]={
    ...defaultWeekData(normalized,data?.periods),
    ...data,
    dates:Array.isArray(data?.dates)&&data.dates.length===5?data.dates:datesForWeek(normalized),
    entries:data?.entries&&typeof data.entries==="object"?data.entries:{}
  };
  saveTimetableWeeks(weeks);
  return weeks[normalized];
}

function deleteTimetableWeek(key){
  const weeks=getTimetableWeeks();
  delete weeks[normalizeWeekKey(key)];
  saveTimetableWeeks(weeks);
}

function migrateTimetableData(){
  const weeks=getTimetableWeeks();
  if(Object.keys(weeks).length){
    if(!weeks[getCurrentTimetableWeekKey()]){
      const periods=Math.min(15,Math.max(1,Number(load("timetablePeriods",TIMETABLE_WEEK_DEFAULT_PERIODS))||TIMETABLE_WEEK_DEFAULT_PERIODS));
      weeks[getCurrentTimetableWeekKey()]=defaultWeekData(getCurrentTimetableWeekKey(),periods);
      saveTimetableWeeks(weeks);
    }
    return;
  }

  const legacy=load("timetable",{});
  const key=normalizeWeekKey(load("currentTimetableWeek",isoWeekInfo().key));
  if(legacy&&typeof legacy==="object"&&Object.keys(legacy).length){
    const periods=Math.min(15,Math.max(1,Number(load("timetablePeriods",TIMETABLE_WEEK_DEFAULT_PERIODS))||TIMETABLE_WEEK_DEFAULT_PERIODS));
    saveTimetableWeek(key,{entries:legacy,periods});
  }else{
    saveTimetableWeek(key,defaultWeekData(key));
  }
  currentTimetableWeekKey=key;
}

function formatWeekLabel(key){
  const normalized=normalizeWeekKey(key);
  const info=isoWeekInfo(isoWeekMonday(Number(normalized.slice(0,4)),Number(normalized.slice(6))));
  const dates=datesForWeek(normalized);
  const first=dates[0],last=dates[4];
  return `KW ${info.week} · ${formatShortDate(first).slice(0,5)}.–${formatLongDate(last)}`
}

function renderTimetableWeekControls(){
  const key=getCurrentTimetableWeekKey();
  const week=getTimetableWeek(key);
  const label=$("timetableWeekLabel");
  const sub=$("timetableWeekSub");
  if(label)label.textContent=formatWeekLabel(key);
  if(sub)sub.textContent=`${formatLongDate(week.dates[0])} – ${formatLongDate(week.dates[4])}`;
}

function shiftTimetableWeek(delta){
  const key=getCurrentTimetableWeekKey();
  const match=key.match(/^(\d{4})-W(\d{2})$/);
  const monday=isoWeekMonday(Number(match[1]),Number(match[2]));
  monday.setDate(monday.getDate()+Number(delta)*7);
  setCurrentTimetableWeek(isoWeekInfo(monday).key);
}

function goToCurrentWeek(){
  setCurrentTimetableWeek(isoWeekInfo().key);
}

function getTimetableEntry(entry){
  if(typeof entry==="string")return {subject:entry,room:"",teacher:""};
  if(entry&&typeof entry==="object")return {
    subject:String(entry.subject||""),
    room:String(entry.room||""),
    teacher:String(entry.teacher||"")
  };
  return {subject:"",room:"",teacher:""};
}

function timetableEntryHtml(entry){
  const {subject,room,teacher}=getTimetableEntry(entry);
  if(!subject)return "";
  const meta=[teacher,room].filter(Boolean).join(" · ");
  return `<span class="timetable-subject-icon">${getSubjectIcon(subject)}</span><strong class="timetable-subject-name">${escapeHtml(subject)}</strong>${meta?`<small>${escapeHtml(meta)}</small>`:""}`;
}

function buildTimetable(){
  const key=getCurrentTimetableWeekKey();
  const week=getTimetableWeek(key);
  const periods=Math.min(15,Math.max(4,Number(week.periods)||TIMETABLE_WEEK_DEFAULT_PERIODS));
  week.periods=periods;
  saveTimetableWeek(key,week);
  if($("periods"))$("periods").value=periods;
  renderTimetableWeekControls();

  const table=document.createElement("table");
  table.className="timetable";
  table.setAttribute("aria-label",`Stundenplan ${formatWeekLabel(key)}`);

  const thead=document.createElement("thead");
  const headRow=document.createElement("tr");
  const corner=document.createElement("th");
  corner.scope="col";
  corner.innerHTML=`<span>Stunde</span>`;
  headRow.appendChild(corner);

  TIMETABLE_DAYS.forEach((day,index)=>{
    const th=document.createElement("th");
    th.scope="col";
    const date=week.dates[index]||datesForWeek(key)[index];
    th.innerHTML=`<div class="timetable-day-name">${day.name}</div><div class="timetable-day-date">${formatLongDate(date)}</div>`;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody=document.createElement("tbody");
  for(let period=1;period<=periods;period++){
    const tr=document.createElement("tr");
    const periodTh=document.createElement("th");
    periodTh.scope="row";
    periodTh.textContent=String(period);
    tr.appendChild(periodTh);

    for(let day=0;day<5;day++){
      const td=document.createElement("td");
      td.dataset.day=String(day);
      td.dataset.period=String(period);
      const entry=week.entries[`${day}-${period}`];
      const parsed=getTimetableEntry(entry);
      td.dataset.subject=parsed.subject;
      const label=document.createElement("span");
      label.className="cell-label";
      label.innerHTML=timetableEntryHtml(entry);
      if(!parsed.subject){
        label.innerHTML=`<span class="timetable-empty" aria-hidden="true">—</span>`;
        label.title="Freistunde / keine eingetragene Stunde";
      }else{
        label.title=[parsed.subject,parsed.teacher,parsed.room].filter(Boolean).join(" · ");
      }
      td.appendChild(label);
      td.addEventListener("click",()=>homeworkTimetableMode?selectHomeworkLesson(day,period):openModal(td));
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  const wrap=$("timetableWrap");
  if(!wrap)return;
  wrap.innerHTML="";
  const scroll=document.createElement("div");
  scroll.className="timetable-scroll";
  scroll.appendChild(table);
  wrap.appendChild(scroll);

  const scrollHint=document.createElement("p");
  scrollHint.className="timetable-scroll-hint";
  scrollHint.textContent="Auf dem Handy seitlich wischen, um alle Tage zu sehen.";
  wrap.appendChild(scrollHint);
}

function resetTimetable(){
  if(!confirm("Soll der gesamte mehrwöchige Stundenplan wirklich gelöscht werden?"))return;
  saveTimetableWeeks({});
  const key=isoWeekInfo().key;
  currentTimetableWeekKey=key;
  save("currentTimetableWeek",key);
  saveTimetableWeek(key,defaultWeekData(key));
  buildTimetable();
  updateImportStatus("");
}

function normalizeOcr(value){
  return String(value||"").toLowerCase()
    .replace(/[äàá]/g,"a").replace(/[öó]/g,"o").replace(/[üú]/g,"u").replace(/ß/g,"ss")
    .replace(/[¦]/g,"|").replace(/[^a-z0-9|]/g,"");
}

const SUBJECT_ALIAS_PAIRS=Object.values(subjectAliases).flatMap(aliases=>
  aliases.map(alias=>({alias,subject:aliases[0],n:normalizeOcr(alias)}))
).filter(item=>item.n);

function resolveSubjectToken(token){
  const raw=String(token||"").trim().replace(/^\([^)]{1,12}\)/,"");
  const normalized=normalizeOcr(raw);
  if(!normalized)return null;
  const explicit={con:"c",co:"c",cc:"c",zft:"zfu",zfl:"zfu",zfu2:"zfu","2fu":"zfu",hu:"mu",lt:"l"};
  if(Object.prototype.hasOwnProperty.call(explicit,normalized)){
    const mapped=SUBJECT_ALIAS_PAIRS.find(item=>item.n===explicit[normalized]);
    if(mapped)return mapped.subject;
  }
  // "REI" ist in diesem Schulmanager-Layout ein Lehrerkürzel und darf nicht
  // wegen der ähnlichen Kurzform "Rel" fälschlich als Religion erkannt werden.
  if(normalized==="rei")return null;
  const exact=SUBJECT_ALIAS_PAIRS.find(item=>item.n===normalized);
  if(exact)return exact.subject;

  const prefix=SUBJECT_ALIAS_PAIRS
    .filter(item=>item.n.length>=2&&normalized.startsWith(item.n))
    .sort((a,b)=>b.n.length-a.n.length)[0];
  if(prefix)return prefix.subject;

  const distance=(a,b)=>{
    if(Math.abs(a.length-b.length)>1)return 99;
    const dp=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
    for(let i=0;i<=a.length;i++)dp[i][0]=i;
    for(let j=0;j<=b.length;j++)dp[0][j]=j;
    for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++){
      dp[i][j]=Math.min(
        dp[i-1][j]+1,
        dp[i][j-1]+1,
        dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1)
      );
    }
    return dp[a.length][b.length];
  };

  const fuzzy=SUBJECT_ALIAS_PAIRS
    .filter(item=>item.n.length>=3&&normalized.length>=3&&item.n.length<=6)
    .map(item=>({...item,d:distance(normalized,item.n)}))
    .filter(item=>item.d<=1)
    .sort((a,b)=>a.d-b.d||b.n.length-a.n.length)[0];

  return fuzzy?.subject||null;
}

function looksLikeRoomToken(token){
  const s=String(token||"").replace(/[()@&,]/g,"").replace(/^i(?=\d{3,4}$)/i,"I").replace(/\//g,"");
  return /^(?:[A-Za-z]{0,2}\d{3,4}[A-Za-z]?|\d{3,4})$/.test(s);
}

function normalizeRoomToken(token,subject=""){
  let s=String(token||"").trim()
    .replace(/[()@&,?]/g,"")
    .replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g,"")
    .replace(/\//g,"")
    .replace(/[\]]/g,"1")
    .replace(/^O(?=\d{2,4}[A-Za-z]?$)/i,"0")
    .replace(/^l(?=\d{3,4}$)/i,"I")
    .replace(/^Mm?(\d{3}[A-Za-z]?)$/i,"M$1");

  if(/^(?:102|1102|I102|N02|NO2)$/i.test(s)&&subject==="Informatik")s="I102";
  if(/^C0[0-9][0-9]$/i.test(s))s=s.toUpperCase();
  if(/^C01S$/i.test(s))s="C015";
  if(/^CO1$/i.test(s))s="C011";
  if(/^CO11$/i.test(s))s="C011";
  if(/^01\/7[bc]?$/i.test(s))s=s.replace(/^01\/7/i,"017");
  if(/^017[bc]?$/i.test(s))s=s.toLowerCase().replace(/^017/,'017');
  if(/^(?:O17C|0FC|OFC)$/i.test(s)&&subject==="Geographie")s="017c";
  if(/^P11[68]$|^P1168$|^P11E$|^P11&$|^P11$/i.test(s))s="P116";
  if(/^Pt20$/i.test(s))s="P120";
  if(/^M21$/i.test(s)&&(/Musik|Latein/.test(subject)))s="M217";
  if(/^P(?:II|IL|ll)6$/i.test(s))s="P116";
  if(/^P11[0-9]$/i.test(s)&&subject==="Physik")s="P116";
  if(/^(?:46N|14\/N|I46N)$/i.test(s))s="146N";
  if(/^@?&?46N$/i.test(s))s="146N";
  if(/^1460$/i.test(s))s="146N";
  if(/^145H$/i.test(s))s="146N";
  if(/^140N$|^1400$/i.test(s))s="146N";
  if(/^14GN$/i.test(s))s="146N";
  if(/^145N$/i.test(s))s="146N";
  if(/^146[5K]$/i.test(s))s="146N";
  if(/^147K$/i.test(s))s="147N";
  if(/^14N$/i.test(s))s=subject==="Ethik"?"147N":"146N";
  if(/^01C$/i.test(s))s="017c";
  if(/^146N$/i.test(s))s="146N";
  if(/^(?:COO?15|015)$/i.test(s))s="C015";
  if(/^COL$/i.test(s)&&subject==="Chemie")s="C011";
  if(/^(?:346N|T46N|146H|146)$/i.test(s))s="146N";
  if(/^F116$/i.test(s))s="P116";
  if(/^2015$/i.test(s)&&(/Chemie|C/.test(subject)))s="C015";
  if(/^017C$/i.test(s))s="017c";

  return looksLikeRoomToken(s)?s:"";
}

function cleanOcrToken(token){
  return String(token||"").trim()
    .replace(/[“”„]/g,'"')
    .replace(/[‘’]/g,"'")
    .replace(/^[|¦=_]+|[|¦=_]+$/g,"")
    .trim();
}

function splitOcrWord(word){
  const raw=cleanOcrToken(word.text);
  if(!raw)return [];
  if(!/[|¦]/.test(raw))return [{...word,text:raw}];
  const parts=raw.split(/[|¦]/).map(part=>part.trim()).filter(Boolean);
  if(parts.length<=1)return [{...word,text:raw}];
  const total=parts.reduce((sum,p)=>sum+Math.max(1,p.length),0);
  let offset=0;
  return parts.map(part=>{
    const ratio=Math.max(1,part.length)/total;
    const partLeft=word.bbox.x0+(word.bbox.x1-word.bbox.x0)*offset;
    const partRight=word.bbox.x0+(word.bbox.x1-word.bbox.x0)*(offset+ratio);
    offset+=ratio;
    return {
      ...word,
      text:part,
      bbox:{x0:partLeft,x1:partRight,y0:word.bbox.y0,y1:word.bbox.y1}
    };
  });
}

function splitOcrWordAcrossColumns(word,columnBounds){
  if(!word?.bbox||columnBounds.length<2)return [{...word}];
  const left=Number(word.bbox.x0), right=Number(word.bbox.x1);
  if(!(right>left))return [{...word}];
  const cuts=columnBounds.slice(1,-1).filter(x=>x>left+2&&x<right-2);
  if(!cuts.length)return [{...word}];
  const parts=String(word.text||"").split("").filter(Boolean);
  if(parts.length<2)return [{...word}];
  const bounds=[left,...cuts,right];
  return bounds.slice(0,-1).map((x,i)=>{
    const x2=bounds[i+1];
    const ratio0=(x-left)/(right-left), ratio1=(x2-left)/(right-left);
    const a=Math.floor(ratio0*parts.length), b=Math.max(a+1,Math.round(ratio1*parts.length));
    return {...word,text:parts.slice(a,b).join(""),bbox:{x0:x,x1:x2,y0:word.bbox.y0,y1:word.bbox.y1}};
  }).filter(item=>item.text);
}

function classifyWordColor(canvas,word){
  const width=canvas.width,height=canvas.height;
  const x0=Math.max(0,Math.floor(word.bbox.x0));
  const y0=Math.max(0,Math.floor(word.bbox.y0));
  const x1=Math.min(width,Math.ceil(word.bbox.x1));
  const y1=Math.min(height,Math.ceil(word.bbox.y1));
  if(x1<=x0||y1<=y0)return "black";

  const data=canvas.getContext("2d",{willReadFrequently:true}).getImageData(x0,y0,x1-x0,y1-y0).data;
  let colored=0,green=0,red=0;
  const step=4;
  for(let i=0;i<data.length;i+=step*4){
    const r=data[i],g=data[i+1],b=data[i+2];
    const max=Math.max(r,g,b),min=Math.min(r,g,b);
    const chroma=max-min;
    if(max>=248||chroma<18)continue;
    colored++;
    if(g>r+5&&g>b+8)green++;
    if(r>g+12&&r>b+12)red++;
  }
  if(!colored)return "black";
  const greenRatio=green/colored;
  const redRatio=red/colored;
  if(greenRatio>=.22&&redRatio>=.12)return "mixed";
  if(greenRatio>=.22&&greenRatio>redRatio*1.12)return "green";
  if(redRatio>=.18&&redRatio>greenRatio*1.12)return "red";
  return "black";
}

function detectTableLines(canvas,horizontal=true,start=0,end=null,rangeStart=0,rangeEnd=null){
  const ctx=canvas.getContext("2d",{willReadFrequently:true});
  const {width,height}=canvas;
  const length=horizontal?height:width;
  const primary=horizontal?width:height;
  const roiStart=Math.max(0,Math.floor(rangeStart??0));
  const roiEnd=Math.min(primary,Math.ceil(rangeEnd??primary));
  const posStart=Math.max(0,Math.floor(start));
  const posEnd=Math.min(length,Math.ceil(end??length));
  if(roiEnd<=roiStart||posEnd<=posStart)return [];

  const roiWidth=Math.max(1,roiEnd-roiStart);
  const step=Math.max(1,Math.floor(roiWidth/950));
  const image=ctx.getImageData(0,0,width,height).data;
  const scores=[];

  for(let pos=posStart;pos<posEnd;pos++){
    let hits=0,count=0;
    for(let i=roiStart;i<roiEnd;i+=step){
      const x=horizontal?i:pos;
      const y=horizontal?pos:i;
      const index=(y*width+x)*4;
      const r=image[index],g=image[index+1],b=image[index+2];
      const max=Math.max(r,g,b),min=Math.min(r,g,b);
      if(max<248&&max-min<42)hits++;
      count++;
    }
    scores.push(count?hits/count:0);
  }

  const threshold=horizontal?.52:.52;
  const raw=[];
  for(let i=0;i<scores.length;i++)if(scores[i]>=threshold)raw.push(posStart+i);

  const groups=[];
  raw.forEach(pos=>{
    const last=groups[groups.length-1];
    if(last&&pos-last[last.length-1]<=2)last.push(pos);
    else groups.push([pos]);
  });

  return groups.map(group=>({
    pos:Math.round(group.reduce((a,b)=>a+b,0)/group.length),
    score:Math.max(...group.map(i=>scores[i-posStart]))
  }));
}

function getHeaderCluster(words,canvas){
  const candidates=words.filter(word=>{
    const t=cleanOcrToken(word.text);
    const isDay=/^(?:montag|dienstag|mittwoch|donnerstag|freitag|mo\.?|di\.?|mi\.?|do\.?|fr\.?)$/i.test(t);
    if(!isDay)return false;
    const centerY=(word.bbox.y0+word.bbox.y1)/2;
    return centerY>canvas.height*.05;
  });
  if(!candidates.length)return [];
  const clusters=[];
  candidates.sort((a,b)=>a.bbox.y0-b.bbox.y0).forEach(word=>{
    const y=(word.bbox.y0+word.bbox.y1)/2;
    let cluster=clusters.find(item=>Math.abs(item.center-y)<48);
    if(!cluster){cluster={center:y,words:[]};clusters.push(cluster);}
    cluster.words.push(word);
    cluster.center=cluster.words.reduce((sum,item)=>
      sum+(item.bbox.y0+item.bbox.y1)/2,0)/cluster.words.length;
  });
  clusters.sort((a,b)=>b.words.length-a.words.length||a.center-b.center);
  return clusters[0]?.words||[];
}

function dayIndexFromText(text){
  const t=String(text||"").toLowerCase().replace(/\./g,"");
  return ["mo","montag","di","dienstag","mi","mittwoch","do","donnerstag","fr","freitag"].indexOf(t)===-1
    ? -1
    : (t.startsWith("mo")?0:t.startsWith("di")?1:t.startsWith("mi")?2:t.startsWith("do")?3:4);
}

function parseDateToken(text){
  const s=cleanOcrToken(text).replace(/\s/g,"");
  const match=s.match(/^(\d{1,2})[.\/-](\d{1,2})(?:[.\/-](\d{2,4}))?$/);
  if(!match)return null;
  let year=match[3]?Number(match[3]):null;
  if(year&&year<100)year+=2000;
  return {day:Number(match[1]),month:Number(match[2]),year};
}

function inferHeaderYear(day,month,weekday,weekNo,preferredYear){
  const years=[];
  const base=Number(preferredYear)||new Date().getFullYear();
  for(let y=base-3;y<=base+3;y++)years.push(y);
  const valid=years.filter(y=>{
    const d=new Date(y,month-1,day,12,0,0,0);
    return d.getFullYear()===y&&d.getMonth()===month-1&&d.getDate()===day &&
      (!weekday||((d.getDay()||7)===weekday))&&
      (!weekNo||isoWeekInfo(d).week===Number(weekNo));
  });
  if(valid.length)return valid.sort((a,b)=>Math.abs(a-base)-Math.abs(b-base))[0];
  return base;
}

function extractWeekNumber(words){
  for(let i=0;i<words.length;i++){
    const a=cleanOcrToken(words[i].text).toLowerCase();
    if(/^(?:kw|kalenderwoche)$/.test(a.replace(/[.:]/g,""))){
      for(let j=i+1;j<Math.min(words.length,i+5);j++){
        const n=cleanOcrToken(words[j].text).match(/\b([1-5]?\d)\b/);
        if(n&&Number(n[1])>=1&&Number(n[1])<=53)return Number(n[1]);
      }
    }
  }
  return null;
}

function findDateHeaderData(words,canvas){
  const dayWords=getHeaderCluster(words,canvas)
    .map(word=>({word,index:dayIndexFromText(word.text)}))
    .filter(item=>item.index>=0)
    .sort((a,b)=>a.index-b.index);

  const dateWords=words.map(word=>{
    const parsed=parseDateToken(word.text);
    if(!parsed)return null;
    return {word,parsed,centerX:(word.bbox.x0+word.bbox.x1)/2,centerY:(word.bbox.y0+word.bbox.y1)/2};
  }).filter(Boolean);

  const centers=new Array(5).fill(null);
  dayWords.forEach(item=>{centers[item.index]=(item.word.bbox.x0+item.word.bbox.x1)/2;});

  if(centers.filter(Boolean).length<3){
    const dateOnly=dateWords
      .filter(item=>item.parsed.day<=31&&item.parsed.month<=12)
      .sort((a,b)=>a.centerX-b.centerX);
    const dedup=[];
    dateOnly.forEach(item=>{
      if(!dedup.some(existing=>Math.abs(existing.centerX-item.centerX)<40))dedup.push(item);
    });
    if(dedup.length>=3){
      const chosen=dedup.slice(0,5);
      chosen.forEach((item,i)=>{if(i<5&&!centers[i])centers[i]=item.centerX;});
    }
  }

  const fallbackWeek=normalizeWeekKey(load("currentTimetableWeek",isoWeekInfo().key));
  const fallbackYear=Number(fallbackWeek.slice(0,4))||new Date().getFullYear();
  const kw=extractWeekNumber(words);
  const dates=new Array(5).fill(null);

  for(const item of dateWords){
    let dayIndex=-1;
    if(centers.some(Boolean)){
      const available=centers.map((x,i)=>x===null?null:{i,d:Math.abs(x-item.centerX)}).filter(Boolean);
      if(available.length)dayIndex=available.sort((a,b)=>a.d-b.d)[0].i;
    }
    if(dayIndex<0 && item.parsed.year){
      const d=new Date(item.parsed.year,item.parsed.month-1,item.parsed.day,12,0,0,0);
      const wd=(d.getDay()||7)-1;
      if(wd>=0&&wd<5)dayIndex=wd;
    }
    if(dayIndex<0)continue;

    let year=item.parsed.year||null;
    if(!year)year=inferHeaderYear(item.parsed.day,item.parsed.month,dayIndex+1,kw,fallbackYear);
    const date=new Date(year,item.parsed.month-1,item.parsed.day,12,0,0,0);
    if(date.getFullYear()!==year||date.getMonth()!==item.parsed.month-1||date.getDate()!==item.parsed.day)continue;
    dates[dayIndex]=dateKeyLocal(date);
  }

  let weekKey=null;
  const knownDate=dates.find(Boolean);
  if(knownDate)weekKey=isoWeekInfo(new Date(`${knownDate}T12:00:00`)).key;
  else if(kw){
    const monday=isoWeekMonday(fallbackYear,kw);
    weekKey=isoWeekInfo(monday).key;
  }else{
    weekKey=fallbackWeek;
  }

  const normalizedDates=datesForWeek(weekKey);
  for(let i=0;i<5;i++)if(!dates[i])dates[i]=normalizedDates[i];

  return {weekKey,dates,dayCenters:centers,weekNumber:kw};
}

function getColumnBounds(canvas,headerData,words){
  const centers=headerData.dayCenters.slice();
  const good=centers.filter(value=>Number.isFinite(value));
  if(good.length>=3){
    const sorted=centers.map((x,i)=>({x,i}))
      .filter(item=>Number.isFinite(item.x))
      .sort((a,b)=>a.x-b.x);

    const gaps=[];
    for(let i=1;i<sorted.length;i++)gaps.push(sorted[i].x-sorted[i-1].x);
    let gap=gaps.length
      ? gaps.slice().sort((a,b)=>a-b)[Math.floor(gaps.length/2)]
      : Math.max(80,canvas.width/6);
    gap=Math.max(45,Math.min(canvas.width/3,gap));

    const dayCenters=Array.from({length:5},(_,i)=>{
      if(Number.isFinite(centers[i]))return centers[i];
      const left=Number.isFinite(centers[i-1])?centers[i-1]+gap:null;
      const right=Number.isFinite(centers[i+1])?centers[i+1]-gap:null;
      return left??right??(sorted[0]?.x+i*gap);
    });

    const dayStarts=[];
    for(let i=0;i<5;i++){
      if(i===0)dayStarts.push(dayCenters[0]-gap/2);
      else dayStarts.push((dayCenters[i-1]+dayCenters[i])/2);
    }
    const dayRight=dayCenters[4]+gap/2;

    // Schulmanager hat links eine schmalere Stunden-Spalte. Sie liegt typischerweise
    // bei etwa 52–58 % einer Tagesbreite. Dieser Anteil ist bei Desktop- und
    // Smartphone-Screenshots stabiler als eine feste Pixelzahl.
    const periodWidth=Math.max(44,Math.min(gap*.72,gap*.55));
    const tableLeft=Math.max(0,dayStarts[0]-periodWidth);
    const boundaries=[tableLeft,...dayStarts,dayRight];
    return clampColumnBounds(boundaries,canvas.width,7);
  }

  const lineRangeStart=Math.floor(canvas.height*.18);
  const lines=detectTableLines(
    canvas,false,
    lineRangeStart,Math.floor(canvas.height*.98),
    Math.floor(canvas.height*.08),canvas.height*.98
  ).map(item=>item.pos).filter(pos=>pos>2&&pos<canvas.width-2);

  if(lines.length>=6){
    return clampColumnBounds(chooseVerticalBoundaryGroup(lines),canvas.width,7);
  }
  if(lines.length===5){
    return clampColumnBounds([...lines,canvas.width],canvas.width,6);
  }

  const defaultLeft=0;
  const defaultWidth=canvas.width/6;
  return clampColumnBounds([
    defaultLeft,
    defaultWidth*.85,
    defaultWidth*1.85,
    defaultWidth*2.85,
    defaultWidth*3.85,
    defaultWidth*4.85,
    canvas.width
  ],canvas.width,7);
}

function clampColumnBounds(bounds,width,minCount=7){
  const sorted=[...bounds].map(Number).filter(Number.isFinite).sort((a,b)=>a-b);
  const out=[];
  sorted.forEach(x=>{
    const v=Math.max(0,Math.min(width,x));
    if(!out.length||Math.abs(out[out.length-1]-v)>3)out.push(v);
  });

  if(out.length>=minCount)return out;
  if(minCount===6&&out.length===5)return [...out,width];
  const gap=width/6;
  return [0,gap*.85,gap*1.85,gap*2.85,gap*3.85,gap*4.85,width];
}

function chooseVerticalBoundaryGroup(lines){
  const unique=[...new Set(lines)].sort((a,b)=>a-b);
  if(unique.length<=7)return unique;
  const candidates=[];
  for(let i=0;i<=unique.length-7;i++){
    const group=unique.slice(i,i+7);
    const gaps=group.slice(1).map((v,j)=>v-group[j]);
    const dayGaps=gaps.slice(-4);
    const avg=dayGaps.reduce((a,b)=>a+b,0)/Math.max(1,dayGaps.length);
    const variance=dayGaps.reduce((a,b)=>a+(b-avg)*(b-avg),0)/Math.max(1,dayGaps.length);
    const firstPenalty=Math.abs(gaps[0]-avg)*.25;
    candidates.push({group,score:Math.sqrt(variance)+firstPenalty});
  }
  return candidates.sort((a,b)=>a.score-b.score)[0]?.group||unique.slice(0,7);
}

function horizontalLineHasGridEnds(canvas,y,columnBounds){
  if(!columnBounds?.length)return false;
  const ctx=canvas.getContext("2d",{willReadFrequently:true});
  let hits=0;
  columnBounds.forEach(x=>{
    const xi=Math.max(0,Math.min(canvas.width-1,Math.round(x)));
    const data=ctx.getImageData(Math.max(0,xi-2),Math.max(0,y-3),Math.min(canvas.width,xi+3)-Math.max(0,xi-2),Math.min(canvas.height,y+4)-Math.max(0,y-3)).data;
    let dark=0,total=data.length/4;
    for(let i=0;i<data.length;i+=4){
      const r=data[i],g=data[i+1],b=data[i+2],max=Math.max(r,g,b),min=Math.min(r,g,b);
      if(max<238&&max-min<45)dark++;
    }
    if(total&&dark/total>.25)hits++;
  });
  return hits>=Math.min(5,columnBounds.length-1);
}

function horizontalLineDensity(canvas,y,columnBounds){
  if(!columnBounds?.length)return 0;
  const ctx=canvas.getContext("2d",{willReadFrequently:true});
  let ink=0,total=0;
  for(let day=0;day<5;day++){
    const left=Math.max(0,Math.round(columnBounds[day+1])+8);
    const right=Math.min(canvas.width,Math.round(columnBounds[day+2])-8);
    if(right<=left)continue;
    const top=Math.max(0,y-2),bottom=Math.min(canvas.height,y+3);
    const data=ctx.getImageData(left,top,right-left,bottom-top).data;
    for(let i=0;i<data.length;i+=4){
      const r=data[i],g=data[i+1],b=data[i+2],max=Math.max(r,g,b),min=Math.min(r,g,b);
      if(max<238&&max-min<50)ink++;
      total++;
    }
  }
  return total?ink/total:0;
}

function chooseTableBottomLine(hLines,canvas,columnBounds,tableTop){
  const candidates=hLines.map(line=>line.pos).filter(y=>y>tableTop+4&&y<canvas.height-3).sort((a,b)=>a-b);
  if(!candidates.length)return null;
  if(candidates.length>=2){
    const scored=candidates.map(y=>({y,d:horizontalLineDensity(canvas,y,columnBounds)}));
    const last=scored[scored.length-1],prev=scored[scored.length-2];
    // A thick card edge is usually much darker than the normal timetable grid.
    if(last.d>=0.62&&last.d>Math.max(prev.d*1.55,prev.d+0.18))return prev.y;
  }
  return candidates[candidates.length-1];
}

function findHeaderBottom(words,canvas,columnBounds){
  const data=findDateHeaderData(words,canvas);
  let maxY=0;
  words.forEach(word=>{
    const t=cleanOcrToken(word.text);
    if(/^(?:montag|dienstag|mittwoch|donnerstag|freitag|mo\.?|di\.?|mi\.?|do\.?|fr\.?)$/i.test(t)||
       parseDateToken(t)){
      maxY=Math.max(maxY,word.bbox.y1);
    }
  });
  const left=columnBounds?.[0]??0,right=columnBounds?.[columnBounds.length-1]??canvas.width;
  const searchStart=Math.max(0,Math.floor(maxY+2));
  const lines=detectTableLines(canvas,true,searchStart,Math.floor(canvas.height*.98),left,right)
    .filter(line=>line.pos>searchStart+2);
  return {bottom:lines[0]?.pos??Math.min(canvas.height-1,searchStart+8),metadata:data};
}

function findPeriodZeroCenter(words,columnBounds,tableCandidate=0){
  if(!columnBounds?.length)return null;
  const left=columnBounds[0],right=columnBounds[1];
  const candidates=(words||[]).map(word=>({
    centerX:(word.bbox.x0+word.bbox.x1)/2,
    centerY:(word.bbox.y0+word.bbox.y1)/2,
    raw:cleanOcrToken(word.text).replace(/[.,:]/g,"")
  })).filter(item=>item.centerX>=left-4&&item.centerX<=right+4&&item.raw==="0"&&item.centerY>tableCandidate);
  candidates.sort((a,b)=>a.centerY-b.centerY);
  return candidates[0]?.centerY??null;
}

function getExpandedTimetableRows(tableTop,tableBottom,hLines){
  const raw=[tableTop,...(hLines||[]).map(line=>line.pos).filter(y=>y>tableTop+2&&y<=tableBottom+2),tableBottom]
    .sort((a,b)=>a-b);
  const unique=[];
  raw.forEach(y=>{if(!unique.length||Math.abs(unique[unique.length-1]-y)>3)unique.push(y);});
  if(unique.length<2)return [];
  const gaps=unique.slice(1).map((v,i)=>v-unique[i]).filter(g=>g>8).sort((a,b)=>a-b);
  const take=Math.max(3,Math.ceil(gaps.length*.45));
  const upper=gaps.slice(-take);
  const typical=upper.length?upper[Math.floor(upper.length/2)]:Math.max(30,(tableBottom-tableTop)/12);
  const rows=[];
  for(let i=0;i<unique.length-1;i++){
    const top=unique[i],bottom=unique[i+1],gap=bottom-top;
    const pieces=gap>typical*1.55?Math.max(2,Math.min(4,Math.round(gap/typical))):1;
    for(let part=0;part<pieces;part++){
      const a=top+gap*part/pieces,b=top+gap*(part+1)/pieces;
      rows.push({top:a,bottom:b,center:(a+b)/2,synthetic:pieces>1});
    }
  }
  return rows;
}

function getPeriodCenters(words,hLines,tableTop,tableBottom,columnBounds,canvas){
  const rows=getExpandedTimetableRows(tableTop,tableBottom,hLines);
  const firstGap=rows[0]?.bottom-rows[0]?.top||30;
  const laterGaps=rows.slice(1,Math.min(rows.length,9)).map(row=>row.bottom-row.top).filter(v=>v>0);
  const medianLater=laterGaps.length?laterGaps.slice().sort((a,b)=>a-b)[Math.floor(laterGaps.length/2)]:firstGap;
  let startPeriod=firstGap<medianLater*.72?0:1;
  const firstDayX=columnBounds?.[1]??canvas.width/6;
  const zeroLabel=words.some(word=>{
    const x=(word.bbox.x0+word.bbox.x1)/2;
    const y=(word.bbox.y0+word.bbox.y1)/2;
    const raw=cleanOcrToken(word.text).replace(/[.,:]/g,"");
    return x>=columnBounds[0]-2&&x<firstDayX-2&&/^0$/.test(raw)&&Math.abs(y-(rows[0]?.center||0))<Math.max(18,firstGap*.65);
  });
  if(zeroLabel)startPeriod=0;
  if(rows.length>=2)return rows.slice(0,15).map((row,index)=>[startPeriod+index,row.center]);

  const labels=[];
  words.forEach(word=>{
    const x=(word.bbox.x0+word.bbox.x1)/2,y=(word.bbox.y0+word.bbox.y1)/2;
    if(x<columnBounds[0]-2||x>=firstDayX-2||y<=tableTop+2||y>=tableBottom)return;
    const raw=cleanOcrToken(word.text).replace(/[.,:]/g,"");
    if(/^\d{1,2}$/.test(raw)){const n=Number(raw);if(n>=0&&n<=15)labels.push({n,y});}
  });
  labels.sort((a,b)=>a.y-b.y);
  const ordered=[];labels.forEach(item=>{if(!ordered.some(existing=>Math.abs(existing.y-item.y)<16))ordered.push(item);});
  if(ordered.length){const start=ordered[0].n===0?0:1;return ordered.slice(0,15).map((item,index)=>[start+index,item.y]);}
  return [];
}

function buildMaskCanvas(canvas,mode){
  const out=document.createElement("canvas");
  out.width=canvas.width;out.height=canvas.height;
  const ctx=out.getContext("2d",{willReadFrequently:true});
  ctx.drawImage(canvas,0,0);
  const image=ctx.getImageData(0,0,out.width,out.height);
  const data=image.data;
  let hits=0;
  for(let i=0;i<data.length;i+=4){
    const r=data[i],g=data[i+1],b=data[i+2];
    const max=Math.max(r,g,b);
    const green=g>r+5&&g>b+8&&g<248&&max<248;
    const red=r>g+12&&r>b+12&&r<248&&max<248;
    const keep=mode==="green"?green:!red&&!green;
    if(keep)hits++;
    if(!keep){
      data[i]=255;data[i+1]=255;data[i+2]=255;
    }else if(mode==="green"){
      data[i]=0;data[i+1]=0;data[i+2]=0;
    }
  }
  ctx.putImageData(image,0,0);
  return {canvas:out,hits};
}

function tokenLooksLikeAlphabetic(token){
  return /^[A-Za-zÄÖÜäöü]{1,8}$/.test(String(token||"").replace(/[.,]/g,""));
}

function tokenX(token){return (token.bbox.x0+token.bbox.x1)/2;}
function tokenY(token){return (token.bbox.y0+token.bbox.y1)/2;}

function tokenSignature(token){
  return `${normalizeOcr(token.text)}|${Math.round(tokenX(token)/4)}|${Math.round(tokenY(token)/4)}`;
}

function dedupeTimetableTokens(tokens){
  const out=[];
  for(const token of tokens){
    const n=normalizeOcr(token.text);
    if(!n)continue;
    const duplicate=out.find(existing=>{
      const close=Math.abs(tokenX(existing)-tokenX(token))<20&&Math.abs(tokenY(existing)-tokenY(token))<20;
      if(!close)return false;
      const same=normalizeOcr(existing.text)===n;
      const colorConflict=token.color!==existing.color;
      const greenOverride=token.color==="green"||existing.color==="green";
      return same || (greenOverride && (!colorConflict || token.color==="green"));
    });
    if(!duplicate){
      out.push(token);
      continue;
    }
    const tokenConf=Number(token.confidence||0), existingConf=Number(duplicate.confidence||0);
    const shouldReplace=token.color==="green"&&(
      duplicate.color!=="green" ||
      tokenConf>existingConf ||
      normalizeOcr(duplicate.text)!==n
    );
    if(shouldReplace)Object.assign(duplicate,token,{color:"green"});
    else if(duplicate.color!=="green"&&tokenConf>existingConf)Object.assign(duplicate,token);
  }
  return out;
}
function analyzeTimetableCellInk(canvas,x0,y0,x1,y1){
  const pad=5;
  const sx=Math.max(0,Math.floor(x0+pad)),sy=Math.max(0,Math.floor(y0+pad));
  const ex=Math.min(canvas.width,Math.ceil(x1-pad)),ey=Math.min(canvas.height,Math.ceil(y1-pad));
  if(ex<=sx||ey<=sy)return {ink:false,green:false};
  const data=canvas.getContext("2d",{willReadFrequently:true}).getImageData(sx,sy,ex-sx,ey-sy).data;
  let ink=0,green=0,total=0;
  for(let i=0;i<data.length;i+=8){
    const r=data[i],g=data[i+1],b=data[i+2];
    const max=Math.max(r,g,b),min=Math.min(r,g,b),chroma=max-min;
    const isGreen=g>r+5&&g>b+8&&g<248&&max<248;
    const isRed=r>g+12&&r>b+12&&r<248&&max<248;
    const isBlack=max<150;
    if(isGreen){green++;ink++;}
    else if(isBlack&&!isRed)ink++;
    total++;
  }
  return {ink:total>0&&ink/total>0.008,green:green>0&&green/total>0.003};
}

function findOccupiedTimetableCells(canvas,columnBounds,rowBounds){
  const result=[];
  rowBounds.forEach(row=>{
    for(let day=0;day<5;day++){
      const x0=columnBounds[day+1],x1=columnBounds[day+2];
      const info=analyzeTimetableCellInk(canvas,x0,row.top,x1,row.bottom);
      if(info.ink)result.push({key:`${day}-${row.period}`,day,period:row.period,green:info.green,ink:info.ink});
    }
  });
  return result;
}

function wordHasMeaningfulInk(canvas,word){
  if(!canvas?.getContext||!word?.bbox)return true;
  const x0=Math.max(0,Math.floor(word.bbox.x0)),y0=Math.max(0,Math.floor(word.bbox.y0));
  const x1=Math.min(canvas.width,Math.ceil(word.bbox.x1)),y1=Math.min(canvas.height,Math.ceil(word.bbox.y1));
  if(x1<=x0||y1<=y0)return false;
  const data=canvas.getContext("2d",{willReadFrequently:true}).getImageData(x0,y0,x1-x0,y1-y0).data;
  let ink=0,total=0;
  for(let i=0;i<data.length;i+=8){
    const r=data[i],g=data[i+1],b=data[i+2];
    const max=Math.max(r,g,b),min=Math.min(r,g,b);
    const dark=max<125;
    const chroma=max-min;
    const colored=(chroma>28&&max<248);
    if(dark||colored)ink++;
    total++;
  }
  return total>0 && ink/total>=0.015;
}

function buildTimetableRowBounds(periodEntries,tableTop,tableBottom,hLines){
  const expanded=getExpandedTimetableRows(tableTop,tableBottom,hLines);
  return periodEntries.map(([period,center])=>{
    const best=expanded.slice().sort((a,b)=>Math.abs(a.center-center)-Math.abs(b.center-center))[0];
    return best?{period,top:best.top,bottom:best.bottom,center:best.center}:null;
  }).filter(Boolean);
}


function collectCellWords(words,columnBounds,periodCenters,tableTop,tableBottom,canvas,rowBounds=[]){
  const byKey=new Map();
  const dayWidth=Math.max(50,(columnBounds[columnBounds.length-1]-columnBounds[1])/5);
  const rowAverage=rowBounds.length
    ? rowBounds.reduce((sum,row)=>sum+Math.max(10,row.bottom-row.top),0)/rowBounds.length
    : 80;
  const rowList=rowBounds.length?rowBounds:periodCenters.map(([period,center],i)=>{
    const prev=periodCenters[i-1]?.[1],next=periodCenters[i+1]?.[1];
    return {period,top:prev?((prev+center)/2):tableTop,bottom:next?((center+next)/2):tableBottom,center};
  });
  words.forEach(rawWord=>{
    const color=rawWord.color||"black";
    if(color==="red"||color==="mixed")return;
    const rawWidth=Math.max(0,rawWord.bbox.x1-rawWord.bbox.x0);
    if(rawWidth>dayWidth*1.45)return;
    if(!wordHasMeaningfulInk(canvas,rawWord))return;
    splitOcrWord(rawWord).flatMap(word=>splitOcrWordAcrossColumns(word,columnBounds)).forEach(word=>{
      if(!wordHasMeaningfulInk(canvas,word))return;
      const wordWidth=Math.max(0,word.bbox.x1-word.bbox.x0);
      const wordHeight=Math.max(0,word.bbox.y1-word.bbox.y0);
      // OCR erzeugt an Rasterlinien gelegentlich "Wörter", die über eine ganze
      // Zeile oder mehrere Spalten reichen (z. B. "off"). Solche Artefakte
      // dürfen niemals als Unterrichtsstunde importiert werden.
      if(wordWidth>dayWidth*1.45||wordHeight>rowAverage*0.9)return;
      const x=tokenX(word),y=tokenY(word);
      if(y<=tableTop+1||y>=tableBottom-1)return;
      let day=-1;
      for(let d=0;d<5;d++){
        if(x>=columnBounds[d+1]-2&&x<=columnBounds[d+2]+2){day=d;break;}
      }
      if(day<0)return;
      const row=rowList.find(item=>y>=item.top+2&&y<=item.bottom-2);
      if(!row)return;
      const key=`${day}-${row.period}`;
      if(!byKey.has(key))byKey.set(key,[]);
      byKey.get(key).push({...word,color});
    });
  });
  return byKey;
}
function normalizeTeacherToken(token){
  let t=String(token||"").trim()
    .replace(/^[^A-Za-zÄÖÜäöü]+|[^A-Za-zÄÖÜäöü]+$/g,"")
    .replace(/[.,|]/g,"")
    .trim();
  if(!t)return "";
  const n=normalizeOcr(t);
  const common={
    bon:"BOD",bod:"BOD",bob:"BOD",
    lof:"LÖF",lif:"LÖF",liF:"LÖF",loer:"LÖF",lor:"LÖF",lör:"LÖF",
    wal:"WAL",war:"WAL",
    rei:"REI",rel:"REI",re:"REI",
    so:"SD",sd:"SD",od:"SD",
    hag:"NAG",mars:"NAG",weit:"NAG",
    rla:"FLA",lif:"LÖF",lgf:"LÖF",sdb:"SD",sb:"SD"
  };
  if(common[n])return common[n];
  if(/^kra(?:n|m)?(?:near|mear|mne ar|n mear)$/i.test(n)||n.startsWith("kranear")||n.startsWith("kranmear"))return "KRA NEAr";
  if(n==="pll")return "PLI";
  return t.toUpperCase()==="KRA"?"KRA":t.toUpperCase()==="NAG"?"NAG":t.toUpperCase()==="BAS"?"BAS":t.toUpperCase()==="PAT"?"PAT":t.toUpperCase()==="PLI"?"PLI":t.toUpperCase()==="FLA"?"FLA":t.toUpperCase()==="SD"?"SD":t;
}

function extractRoomFromTokens(tokens,subject=""){
  const rooms=[];
  for(const token of tokens||[]){
    const raw=cleanOcrToken(token.text).replace(/[()]/g,"");
    const candidates=[raw,...String(raw).split(/\s+/)];
    for(const candidate of candidates){
      const room=normalizeRoomToken(candidate,subject);
      if(room)rooms.push(room);
    }
  }
  return rooms.sort((a,b)=>b.length-a.length||a.localeCompare(b))[0]||"";
}

function parseTimetableCell(tokens,cellTop=0,cellBottom=100){
  const cleaned=dedupeTimetableTokens(tokens.map(token=>({
    ...token,
    text:cleanOcrToken(token.text).replace(/[()]/g,"")
  })).filter(token=>token.text));
  if(!cleaned.length)return null;

  const roomTokens=cleaned.filter(token=>looksLikeRoomToken(token.text));
  const nonRoomTokens=cleaned.filter(token=>!looksLikeRoomToken(token.text));
  const textTokens=nonRoomTokens.filter(token=>tokenLooksLikeAlphabetic(token.text));
  if(!nonRoomTokens.length)return null;

  const sorted=textTokens.slice().sort((a,b)=>tokenX(a)-tokenX(b));
  const knownTokens=nonRoomTokens.slice().sort((a,b)=>tokenX(a)-tokenX(b));
  const known=knownTokens.map(token=>({
    token,
    index:sorted.indexOf(token),
    subject:resolveSubjectToken(token.text),
    score:(token.color==="green"?50:0)+((token.bbox.y0+token.bbox.y1)/2<cellTop+(cellBottom-cellTop)*.72?5:0)
  })).filter(item=>item.subject);

  let subjectItem=known
    .sort((a,b)=>b.score-a.score||a.index-b.index)[0]||null;

  // Falls kein Kürzel aus der Fachliste passt, ist in Schulmanager-Zellen
  // das am weitesten links stehende kurze Textkürzel in der oberen Zeile
  // fast immer das Fach. So werden auch z. B. ZfU/AG/Projekt erkannt.
  if(!subjectItem){
    const topBand=cellTop+(cellBottom-cellTop)*.72;
    const candidates=nonRoomTokens.slice().sort((a,b)=>tokenX(a)-tokenX(b)).filter(token=>tokenY(token)<=topBand);
    if(candidates.length){
      const greenCandidate=candidates.find(token=>token.color==="green");
      subjectItem={token:greenCandidate||candidates[0],index:sorted.indexOf(greenCandidate||candidates[0]),subject:null,score:greenCandidate?50:0};
    }
  }

  if(!subjectItem)return null;

  let subject=subjectItem.subject;
  const subjectRaw=cleanOcrToken(subjectItem.token.text).replace(/[()]/g,"");
  if(!subject){
    subject=subjectRaw.trim();
    if(subjectItem.token?.color==="green"&&/^(?:2fu|zfl|zft|rail|zfu)$/i.test(normalizeOcr(subjectRaw)))subject="ZfU";
    if(!/^[A-Za-zÄÖÜäöü][A-Za-zÄÖÜäöü0-9/+&.-]{0,8}$/.test(subject))return null;
  }

  // Bekannte Fachkürzel, bei denen OCR Fach+Lehrer zusammenklebt.
  let attachedTeacher="";
  const normalized=normalizeOcr(subjectRaw);
  const alias=SUBJECT_ALIAS_PAIRS
    .filter(item=>item.n.length>=1&&normalized.startsWith(item.n)&&normalized.length>item.n.length)
    .sort((a,b)=>b.n.length-a.n.length)[0];
  if(alias&&subject===alias.subject)attachedTeacher=normalized.slice(alias.n.length).toUpperCase();

  const teacherTokens=[];
  if(attachedTeacher.length>=2)teacherTokens.push(normalizeTeacherToken(attachedTeacher));

  sorted.forEach((token,index)=>{
    if(index===subjectItem.index)return;
    if(looksLikeRoomToken(token.text))return;
    if(!tokenLooksLikeAlphabetic(token.text))return;
    const text=cleanOcrToken(token.text).replace(/^[^A-Za-zÄÖÜäöü]+|[^A-Za-zÄÖÜäöü]+$/g,"");
    if(!text)return;
    const y=tokenY(token);
    if(y>cellTop+(cellBottom-cellTop)*.76)return;
    if(normalizeOcr(text)===normalizeOcr(subjectRaw))return;
    const teacher=normalizeTeacherToken(text);
    if(teacher&&normalizeOcr(teacher)!==normalizeOcr(subjectRaw))teacherTokens.push(teacher);
  });

  const roomCandidates=roomTokens
    .map(token=>({
      room:normalizeRoomToken(token.text,subject),
      green:token.color==="green",
      y:tokenY(token)
    }))
    .filter(item=>item.room)
    .sort((a,b)=>Number(b.green)-Number(a.green)||b.y-a.y);

  const room=[...new Set(roomCandidates.map(item=>item.room))][0]||extractRoomFromTokens(cleaned,subject);

  const roomSubject={
    I102:"Informatik",
    C011:"Chemie",
    C015:"Chemie",
    P116:"Physik",
    P120:"Physik",
    "017c":"Geographie"
  }[room];
  const teacherLike=/^(?:BAS|NAG|SD|BOD|KRA|NEAr|FLA|PAT|REI|PLI|WAL|LÖF|LOF|BON|BoD|Lör|RE|REL|Sb)$/i.test(subject);
  if(roomSubject&&(!resolveSubjectToken(subject)||teacherLike))subject=roomSubject;

  const orderedTeachers=teacherTokens
    .map(String).filter(Boolean)
    .sort((a,b)=>{
      const ax=cleaned.find(t=>normalizeTeacherToken(t.text)===a)?.bbox?.x0??0;
      const bx=cleaned.find(t=>normalizeTeacherToken(t.text)===b)?.bbox?.x0??0;
      return ax-bx;
    });
  const knownTeachers=orderedTeachers.filter(t=>teacherQuality(t)>=3);
  const selectedTeachers=knownTeachers.length
    ? orderedTeachers.filter(t=>teacherQuality(t)>=3)
    : (orderedTeachers.length>2?orderedTeachers.slice(-2):orderedTeachers);
  const teacher=[...new Set(selectedTeachers)]
    .join(" ")
    .replace(/\s+/g," ")
    .trim();

  return {subject,room,teacher};
}

async function recognizeTimetableCell(canvas,x0,y0,x1,y1,mode="original"){
  const pad=3;
  const cropY0=mode==="room"?y0+(y1-y0)*0.42:y0;
  const sx=Math.max(0,Math.floor(x0+pad)),sy=Math.max(0,Math.floor(cropY0+pad));
  const ex=Math.min(canvas.width,Math.ceil(x1-pad)),ey=Math.min(canvas.height,Math.ceil(y1-pad));
  if(ex<=sx||ey<=sy)return [];
  const ctxSource=canvas.getContext("2d",{willReadFrequently:true});
  const source=ctxSource.getImageData(sx,sy,ex-sx,ey-sy);
  const sourceData=source.data;

  // Für den Zell-Fallback wird Rot bereits vor der OCR entfernt. Dadurch kann
  // die rote, durchgestrichene Altstunde die grüne/ schwarze gültige Stunde nicht
  // mehr "überreden", aber die Originalpixel bleiben für die Farbbestimmung im
  // globalen Screenshot erhalten.
  for(let i=0;i<sourceData.length;i+=4){
    const r=sourceData[i],g=sourceData[i+1],b=sourceData[i+2];
    const max=Math.max(r,g,b),min=Math.min(r,g,b),chroma=max-min;
    const green=g>r+5&&g>b+8&&g<248&&max<248;
    const red=r>g+12&&r>b+12&&r<248&&max<248;
    const dark=max<150;
    if(mode==="green"){
      if(!green){sourceData[i]=255;sourceData[i+1]=255;sourceData[i+2]=255;}
      else{sourceData[i]=0;sourceData[i+1]=0;sourceData[i+2]=0;}
    }else{
      // Schwarze und grüne Schrift wird in ein gemeinsames schwarzes OCR-Maskenbild
      // umgewandelt. Rote, auch durchgestrichene Altstunden werden komplett entfernt.
      const keep=(dark||green)&&!red;
      if(!keep){sourceData[i]=255;sourceData[i+1]=255;sourceData[i+2]=255;}
      else{sourceData[i]=0;sourceData[i+1]=0;sourceData[i+2]=0;}
    }
    void chroma;
  }

  const scale=4.0;
  const out=document.createElement("canvas");
  out.width=Math.max(1,Math.round(source.width*scale));
  out.height=Math.max(1,Math.round(source.height*scale));
  const outCtx=out.getContext("2d");
  outCtx.fillStyle="#fff";outCtx.fillRect(0,0,out.width,out.height);
  const temp=document.createElement("canvas");
  temp.width=source.width;temp.height=source.height;
  temp.getContext("2d").putImageData(source,0,0);
  outCtx.imageSmoothingEnabled=true;
  outCtx.drawImage(temp,0,0,out.width,out.height);

  try{
    const result=await Tesseract.recognize(out,"deu+eng",{
      tessedit_pageseg_mode:"6",
      preserve_interword_spaces:"1",
      tessedit_char_whitelist:mode==="room"?"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@&/":""
    });
    return (result.data.words||[])
      .filter(word=>word.text?.trim()&&Number(word.confidence||0)>=2)
      .map(word=>{
        const mapped={
          ...word,
          bbox:{
            x0:word.bbox.x0/scale+sx,
            x1:word.bbox.x1/scale+sx,
            y0:word.bbox.y0/scale+sy,
            y1:word.bbox.y1/scale+sy
          }
        };
        mapped.color=mode==="green"?"green":classifyWordColor(canvas,mapped);
        return mapped;
      });
  }catch(_){
    return [];
  }
}
function subjectQuality(subject){
  if(!subject)return 0;
  if(resolveSubjectToken(subject))return 3;
  const n=normalizeOcr(subject);
  return /^[a-z][a-z0-9]{0,8}$/.test(n)?1:0;
}

function teacherQuality(teacher){
  if(!teacher)return 0;
  const n=normalizeOcr(teacher);
  const known=new Set(["bas","nag","sd","bod","krau","kra","near","kranear","fla","pat","rei","pli","wal","lof","bon"]);
  if(known.has(n))return 3;
  if(/^([a-z]{2,8})( [a-z]{2,8})?$/.test(n))return 1;
  return 0;
}

function roomQuality(room){
  return room&&normalizeRoomToken(room)?2:0;
}

function mergeTimetableEntry(existing,candidate){
  const a=getTimetableEntry(existing),b=getTimetableEntry(candidate);
  const subject=subjectQuality(b.subject)>=subjectQuality(a.subject)&&b.subject?b.subject:(a.subject||b.subject);
  const roomA=normalizeRoomToken(a.room,subject),roomB=normalizeRoomToken(b.room,subject);
  const room=roomQuality(roomB)>=roomQuality(roomA)?(roomB||roomA):(roomA||roomB);
  const teacher=teacherQuality(b.teacher)>teacherQuality(a.teacher)?b.teacher:(a.teacher||b.teacher);
  return {subject,room,teacher};
}

function buildImportEntries(rawWords,greenWords,canvas,columnBounds,periodEntries,tableTop,tableBottom,hLines=[]){
  const original=rawWords.map(word=>{
    const color=classifyWordColor(canvas,word);
    return {...word,color};
  });
  const greens=greenWords.map(word=>({...word,color:"green"}));

  // Schwarze/ungefärbte OCR bleibt erhalten; rote Tokens und gemischte
  // Rot+Grün-Tokens werden verworfen. Die reine Grün-OCR holt danach die
  // tatsächlich gültige (grüne) Information zurück.
  const rowBounds=buildTimetableRowBounds(periodEntries,tableTop,tableBottom,hLines);
  const cells=collectCellWords([...original,...greens],columnBounds,periodEntries,tableTop,tableBottom,canvas,rowBounds);
  const result={};
  const periodsByKey=new Map();
  periodEntries.forEach(([p,y])=>periodsByKey.set(p,y));

  for(const [key,tokens] of cells.entries()){
    const [day,period]=key.split("-").map(Number);
    const centers=periodEntries.map(item=>item[1]).sort((a,b)=>a-b);
    const idx=periodEntries.findIndex(item=>item[0]===period);
    const top=idx<0?tableTop:(idx===0?tableTop:(centers[idx]+centers[idx-1])/2);
    const bottom=idx<0?tableBottom:(idx===centers.length-1?tableBottom:(centers[idx]+centers[idx+1])/2);
    const parsed=parseTimetableCell(tokens,top,bottom);
    if(parsed?.subject)result[key]=parsed;
  }
  return result;
}

function updateImportStatus(message,isError=false){
  const status=$("timetableImportStatus");
  if(!status)return;
  status.textContent=message||"";
  status.classList.toggle("hidden",!message);
  status.classList.toggle("error",isError);
}

async function importTimetableScreenshot(file){
  if(!file)return;
  if(!window.Tesseract){
    updateImportStatus("Die OCR-Erkennung konnte nicht geladen werden. Prüfe die Internetverbindung.",true);
    return;
  }

  updateImportStatus("Screenshot wird vorbereitet …");
  try{
    const canvas=await getScreenshotCanvas(file);
    const imageWidth=canvas.width,imageHeight=canvas.height;
    if(imageWidth<250||imageHeight<180)throw new Error("Das Bild ist zu klein für einen Stundenplan.");

    updateImportStatus("Tabellenkopf und Raster werden erkannt …");
    const firstOcr=await Tesseract.recognize(canvas,"deu+eng");
    const firstWords=(firstOcr.data.words||[])
      .filter(word=>word.text?.trim()&&Number(word.confidence||0)>=8);

    if(firstWords.length<8)throw new Error("Zu wenig Text erkannt. Bitte einen vollständigen Stundenplan-Screenshot verwenden.");

    const headerData=findDateHeaderData(firstWords,canvas);
    const columnBounds=getColumnBounds(canvas,headerData,firstWords);
    const headerInfo=findHeaderBottom(firstWords,canvas,columnBounds);
    let tableTop=headerInfo.bottom;

    let hLines=detectTableLines(
      canvas,true,
      Math.max(0,tableTop-2),Math.floor(imageHeight*.985),
      Math.max(0,columnBounds[0]),Math.min(imageWidth,columnBounds[6])
    );
    const zeroCenter=findPeriodZeroCenter(firstWords,columnBounds,tableTop-2);
    if(zeroCenter!=null){
      const topLine=hLines.map(line=>line.pos).filter(y=>y<zeroCenter-1&&y>=tableTop-4).sort((a,b)=>a-b).pop();
      if(topLine!=null&&topLine>=tableTop-4){
        tableTop=topLine;
        hLines=detectTableLines(
          canvas,true,
          Math.max(0,tableTop-2),Math.floor(imageHeight*.985),
          Math.max(0,columnBounds[0]),Math.min(imageWidth,columnBounds[6])
        );
      }
    }
    const bottomLine=chooseTableBottomLine(hLines,canvas,columnBounds,tableTop);
    const tableBottom=bottomLine??Math.min(imageHeight-2,Math.max(...firstWords.map(word=>word.bbox.y1),tableTop+200));

    const periodEntries=getPeriodCenters(
      firstWords,hLines,tableTop,tableBottom,columnBounds,canvas
    );

    const filteredPeriods=periodEntries
      .filter(([period,y])=>period>=0&&period<=15&&y>tableTop&&y<tableBottom)
      .sort((a,b)=>a[0]-b[0]);

    if(!filteredPeriods.length)throw new Error("Die Stundenzeilen konnten nicht erkannt werden.");

    const periodCenters=filteredPeriods;
    const greenMask=buildMaskCanvas(canvas,"green");
    let greenWords=[];
    if(greenMask.hits>40){
      updateImportStatus("Grüne Einträge werden bevorzugt erkannt …");
      const greenOcr=await Tesseract.recognize(greenMask.canvas,"deu+eng");
      greenWords=(greenOcr.data.words||[])
        .filter(word=>word.text?.trim()&&Number(word.confidence||0)>=2);
    }

    const timetable=buildImportEntries(
      firstWords,greenWords,canvas,columnBounds,periodCenters,tableTop,tableBottom,hLines
    );

    // Unsichere Zellen werden einzeln nachgelesen. Das ist absichtlich auf
    // Zellen mit vorhandener OCR beschränkt, damit der Import nicht unnötig langsam wird.
    const rowBounds=buildTimetableRowBounds(periodCenters,tableTop,tableBottom,hLines);
    const occupiedCells=findOccupiedTimetableCells(canvas,columnBounds,rowBounds);
    const fallbackCells=occupiedCells
      .slice()
      .sort((a,b)=>Number(b.green)-Number(a.green))
      .slice(0,45);

    if(fallbackCells.length){
      updateImportStatus(`Einzelne Felder werden nachgeprüft … 0/${fallbackCells.length}`);
      for(let i=0;i<fallbackCells.length;i++){
        const {day,period}=fallbackCells[i];
        const dayLeft=columnBounds[day+1],dayRight=columnBounds[day+2];
        const pIndex=periodCenters.findIndex(item=>item[0]===period);
        if(pIndex<0)continue;
        const row=rowBounds.find(item=>item.period===period);
        const cellTop=row?.top??tableTop;
        const cellBottom=row?.bottom??tableBottom;
        const originalTokens=await recognizeTimetableCell(canvas,dayLeft,cellTop,dayRight,cellBottom,"original");
        let parsed=parseTimetableCell(originalTokens,cellTop,cellBottom);
        if(fallbackCells[i].green){
          const greenTokens=await recognizeTimetableCell(canvas,dayLeft,cellTop,dayRight,cellBottom,"green");
          const greenParsed=parseTimetableCell(greenTokens,cellTop,cellBottom);
          if(greenParsed?.subject)parsed=mergeTimetableEntry(parsed,greenParsed);
        }
        if(parsed?.subject&& !parsed.room){
          const roomTokens=await recognizeTimetableCell(canvas,dayLeft,cellTop,dayRight,cellBottom,"room");
          const room=extractRoomFromTokens(roomTokens,parsed.subject);
          if(room){
            parsed.room=room;
            const inferred={I102:"Informatik",C011:"Chemie",C015:"Chemie",P116:"Physik",P120:"Physik","017c":"Geographie"}[room];
            if(inferred&&!resolveSubjectToken(parsed.subject))parsed.subject=inferred;
          }
        }
        if(parsed?.subject)timetable[fallbackCells[i].key]=mergeTimetableEntry(timetable[fallbackCells[i].key],parsed);
        updateImportStatus(`Einzelne Felder werden nachgeprüft … ${i+1}/${fallbackCells.length}`);
      }
    }

    if(!Object.keys(timetable).length){
      throw new Error("Kein gültiges Fach erkannt. Rote Einträge werden bewusst ignoriert.");
    }

    const targetWeekKey=headerData.weekKey||getCurrentTimetableWeekKey();
    const targetDates=headerData.dates?.length===5?headerData.dates:datesForWeek(targetWeekKey);
    const importedPeriods=Object.keys(timetable)
      .map(key=>{const m=String(key).match(/^[0-4]-(\d{1,2})$/);return m?Number(m[1]):0;})
      .filter(period=>period>=1&&period<=15);
    const visiblePeriod=importedPeriods.length
      ? Math.min(15,Math.max(...importedPeriods))
      : TIMETABLE_WEEK_DEFAULT_PERIODS;

    saveTimetableWeek(targetWeekKey,{
      dates:targetDates,
      entries:timetable,
      periods:visiblePeriod,
      importedAt:new Date().toISOString()
    });
    setCurrentTimetableWeek(targetWeekKey);

    const dayCount=new Set(Object.keys(timetable).map(key=>key.split("-")[0])).size;
    const blankCount=Math.max(0,visiblePeriod*5-Object.keys(timetable).length);
    const weekText=formatWeekLabel(targetWeekKey);
    updateImportStatus(
      `${Object.keys(timetable).length} Stunden importiert · ${dayCount} Tage · ${blankCount} freie/leer gelassene Felder erhalten · ${weekText}.`,
      false
    );
  }catch(error){
    console.error("Stundenplan-Import:",error);
    updateImportStatus(`Import fehlgeschlagen: ${error?.message||"Unbekannter Fehler"}`,true);
  }
}

function getScreenshotCanvasOriginal(file){
  return (async()=>{
    let source=file;
    const type=String(file?.type||"").toLowerCase();
    const name=String(file?.name||"").toLowerCase();
    const isHeic=type.includes("heic")||type.includes("heif")||/\.(heic|heif)$/.test(name);
    if(isHeic){
      if(typeof window.heic2any!=="function")throw new Error("HEIC/HEIF wird auf diesem Gerät nicht unterstützt. Bitte als JPG oder PNG exportieren.");
      const converted=await window.heic2any({blob:file,toType:"image/png",quality:1});
      source=Array.isArray(converted)?converted[0]:converted;
    }
    let bitmap=null;
    if(typeof createImageBitmap==="function"){
      try{bitmap=await createImageBitmap(source,{imageOrientation:"from-image"});}
      catch(_){
        try{bitmap=await createImageBitmap(source);}catch(__){bitmap=null;}
      }
    }

    if(bitmap){
      const canvas=document.createElement("canvas");
      canvas.width=bitmap.width;
      canvas.height=bitmap.height;
      canvas.getContext("2d",{willReadFrequently:true}).drawImage(bitmap,0,0);
      bitmap.close?.();
      return canvas;
    }

    const url=URL.createObjectURL(source);
    try{
      const image=await new Promise((resolve,reject)=>{
        const img=new Image();
        img.onload=()=>resolve(img);
        img.onerror=()=>reject(new Error("Das Bildformat konnte auf diesem Gerät nicht geöffnet werden."));
        img.src=url;
      });
      const canvas=document.createElement("canvas");
      canvas.width=image.naturalWidth||image.width;
      canvas.height=image.naturalHeight||image.height;
      canvas.getContext("2d",{willReadFrequently:true}).drawImage(image,0,0);
      return canvas;
    }finally{URL.revokeObjectURL(url);}
  })();
}

function openModal(cell){
  currentCell=cell;
  $("modal").classList.remove("hidden");
  const key=`${cell.dataset.day}-${cell.dataset.period}`;
  let entry;
  if(timetableEditMode==="template"){
    entry=timetableTemplateDraft?.entries?.[key];
  }else{
    const week=getTimetableWeek();
    entry=week.entries[key];
  }
  const parsed=getTimetableEntry(entry);
  refreshSubjectSelects();
  if(timetableEditMode==="template"){
    const select=$("modalSubject");
    if(select && ![...select.options].some(option=>option.value==="")){
      const empty=document.createElement("option");
      empty.value="";
      empty.textContent="— Leer —";
      select.insertBefore(empty,select.firstChild);
    }
  }
  $("modalSubject").value=parsed.subject||"";
  if(!parsed.subject && timetableEditMode!=="template")$("modalSubject").value=subjectsBayern[0];
  $("modalRoom").value=parsed.room||"";
  $("modalTeacher").value=parsed.teacher||"";
}

function closeModal(){
  $("modal").classList.add("hidden");
  currentCell=null;
  timetableEditMode="week";
}

function confirmModal(){
  if(!currentCell)return closeModal();
  const val=$("modalSubject").value.trim();
  const room=$("modalRoom").value.trim();
  const teacher=$("modalTeacher").value.trim();
  const key=`${currentCell.dataset.day}-${currentCell.dataset.period}`;
  if(timetableEditMode==="template"){
    if(!timetableTemplateDraft)timetableTemplateDraft={entries:{},periods:6};
    if(val) timetableTemplateDraft.entries[key]={subject:val,room,teacher};
    else delete timetableTemplateDraft.entries[key];
    closeModal();
    renderTimetableTemplateEditor();
    return;
  }
  if(!val)return closeModal();

  saveActiveSubjects([...getActiveSubjects(),val]);
  const weekKey=getCurrentTimetableWeekKey();
  const week=getTimetableWeek(weekKey);
  week.entries[key]={subject:val,room,teacher};
  saveTimetableWeek(weekKey,week);
  refreshSubjectSelects();
  closeModal();
  buildTimetable();
}

function openHomeworkTimetable(){
  homeworkTimetableMode=true;
  $("homeworkTimetableModal").classList.remove("hidden");
  $("homeworkTimetableModal").setAttribute("aria-hidden","false");
  document.querySelectorAll(".nav-item").forEach(item=>item.classList.toggle("active",item.dataset.page==="stundenplan"));
  showPage("stundenplan");
  buildTimetable();
}

function closeHomeworkTimetable(){
  $("homeworkTimetableModal").classList.add("hidden");
  $("homeworkTimetableModal").setAttribute("aria-hidden","true");
  homeworkTimetableMode=false;
}

function selectHomeworkLesson(day,period){
  const week=getTimetableWeek();
  const entry=getTimetableEntry(week.entries[`${day}-${period}`]);
  if(!entry.subject){
    alert("Bitte wähle eine belegte Stunde aus.");
    return;
  }

  const active=getActiveSubjects();
  if(!active.includes(entry.subject))saveActiveSubjects([...active,entry.subject]);
  refreshSubjectSelects();
  $("hwFachSelect").value=entry.subject;

  const targetDate=week.dates[day]||dateKeyLocal(new Date());
  const today=dateKeyLocal(new Date());
  $("hwDatum").value=targetDate<today?today:targetDate;

  homeworkTimetableMode=false;
  closeHomeworkTimetable();
  document.querySelectorAll(".nav-item").forEach(item=>item.classList.toggle("active",item.dataset.page==="hausaufgaben"));
  showPage("hausaufgaben");
}

function renderStundenplan(){
  buildTimetable();
}


/* ===== v43: Import-Optimierung, Wochenvorlage, mobile Wochenraster, Schulaufgabentermine ===== */
let timetableOcrWorkerPromise = null;
let timetableImportMode = "current";
const SCHOOL_ASSIGNMENT_COLORS = [
  {key:"amber",label:"Gold",value:"#f2c35f"},
  {key:"violet",label:"Violett",value:"#b89cff"},
  {key:"blue",label:"Blau",value:"#73baf5"},
  {key:"mint",label:"Mint",value:"#78d6b0"},
  {key:"coral",label:"Koralle",value:"#ff8d7a"},
  {key:"pink",label:"Pink",value:"#ef8dc6"}
];
let schoolAssignmentDraft = null;
let timetableTemplateDraft = null;
let timetableEditMode = "week";

function getTimetableTemplate(){
  const raw=load("timetableTemplate",null);
  if(!raw||typeof raw!=="object")return null;
  return {
    entries:raw.entries&&typeof raw.entries==="object"?raw.entries:{},
    periods:Math.min(15,Math.max(1,Number(raw.periods)||TIMETABLE_WEEK_DEFAULT_PERIODS)),
    importedAt:raw.importedAt||null
  };
}
function saveTimetableTemplate(data){
  if(!data?.entries||typeof data.entries!=="object")return;
  save("timetableTemplate",{
    entries:cloneTimetableEntries(data.entries),
    periods:Math.min(15,Math.max(1,Number(data.periods)||TIMETABLE_WEEK_DEFAULT_PERIODS)),
    importedAt:data.importedAt||new Date().toISOString()
  });
}
function clearTimetableTemplate(){localStorage.removeItem("timetableTemplate");}

function openTimetableTemplateEditor(){
  const saved=getTimetableTemplate();
  timetableTemplateDraft=saved
    ? {entries:cloneTimetableEntries(saved.entries),periods:saved.periods,importedAt:saved.importedAt}
    : {entries:{},periods:Math.min(15,Math.max(1,Number(load("timetablePeriods",6))||6))};
  $("timetableTemplateModal")?.classList.remove("hidden");
  $("timetableTemplateModal")?.setAttribute("aria-hidden","false");
  $("templatePeriods").value=String(timetableTemplateDraft.periods);
  renderTimetableTemplateEditor();
}
function closeTimetableTemplateEditor(){
  $("timetableTemplateModal")?.classList.add("hidden");
  $("timetableTemplateModal")?.setAttribute("aria-hidden","true");
  timetableTemplateDraft=null;
}
function renderTimetableTemplateEditor(){
  const grid=$("timetableTemplateGrid");
  if(!grid||!timetableTemplateDraft)return;
  const periods=Math.min(15,Math.max(1,Number(timetableTemplateDraft.periods)||6));
  timetableTemplateDraft.periods=periods;
  grid.innerHTML="";
  const corner=document.createElement("div");
  corner.className="template-grid-header template-grid-corner";
  corner.textContent="Std.";
  grid.appendChild(corner);
  TIMETABLE_DAYS.forEach(day=>{
    const h=document.createElement("div");
    h.className="template-grid-header";
    h.textContent=day.short.replace(".","");
    grid.appendChild(h);
  });
  for(let period=1;period<=periods;period++){
    const p=document.createElement("div");
    p.className="template-grid-period";
    p.textContent=String(period);
    grid.appendChild(p);
    for(let day=0;day<5;day++){
      const key=`${day}-${period}`;
      const entry=getTimetableEntry(timetableTemplateDraft.entries[key]);
      const cell=document.createElement("button");
      cell.type="button";
      cell.className=`template-grid-cell${entry.subject?" filled":""}`;
      cell.dataset.day=String(day);cell.dataset.period=String(period);
      cell.innerHTML=entry.subject
        ? `${getSubjectIcon(entry.subject)}<strong>${escapeHtml(entry.subject)}</strong><small>${escapeHtml([entry.teacher,entry.room].filter(Boolean).join(" · ")||"Stunde")}</small>`
        : `<span class="template-empty">+</span><small>leer</small>`;
      cell.addEventListener("click",()=>{timetableEditMode="template";openModal(cell);});
      grid.appendChild(cell);
    }
  }
  const status=$("timetableTemplateStatus");
  if(status){
    const count=Object.values(timetableTemplateDraft.entries).filter(v=>getTimetableEntry(v).subject).length;
    status.textContent=count?`${count} Stunden im Wochenplan. Tippe auf eine Zelle, um sie zu bearbeiten.`:"Noch kein Wochenplan angelegt. Tippe auf leere Zellen, um Stunden einzutragen.";
    status.classList.remove("hidden");
  }
}
function saveTimetableTemplateFromEditor(){
  if(!timetableTemplateDraft)return;
  timetableTemplateDraft.periods=Math.min(15,Math.max(1,Number($("templatePeriods")?.value)||6));
  const entries=cloneTimetableEntries(timetableTemplateDraft.entries);
  saveTimetableTemplate({entries,periods:timetableTemplateDraft.periods});
  // Bereits vorhandene Wochen werden nur dann befüllt, wenn sie wirklich leer
  // sind. Ein eigener, auch älterer Stundenplan bleibt immer unangetastet.
  const weeks=getTimetableWeeks();
  let changedEmptyWeeks=false;
  Object.keys(weeks).forEach(weekKey=>{
    const week=getTimetableWeek(weekKey);
    if(getOccupiedTimetablePeriodCount(week)>0)return;
    weeks[weekKey]={
      ...defaultWeekData(weekKey,timetableTemplateDraft.periods),
      dates:datesForWeek(weekKey),
      entries:cloneTimetableEntries(entries),
      periods:timetableTemplateDraft.periods,
      templateApplied:true,
      importedAt:new Date().toISOString()
    };
    changedEmptyWeeks=true;
  });
  if(changedEmptyWeeks)saveTimetableWeeks(weeks);
  closeTimetableTemplateEditor();
  buildTimetable();
  updateImportStatus("Wochenplan gespeichert. Nur leere Wochen wurden übernommen; vorhandene Stundenpläne bleiben unverändert.",false);
}
function clearTimetableTemplateDraft(){
  if(!timetableTemplateDraft)return;
  timetableTemplateDraft.entries={};
  renderTimetableTemplateEditor();
}
function cloneTimetableEntries(entries){
  return Object.fromEntries(Object.entries(entries||{}).map(([key,value])=>[key,{...getTimetableEntry(value)}]));
}
function getTimetableWeek(key=getCurrentTimetableWeekKey()){
  const normalized=normalizeWeekKey(key);
  const weeks=getTimetableWeeks();
  const fallbackPeriods=Math.min(15,Math.max(1,Number(load("timetablePeriods",TIMETABLE_WEEK_DEFAULT_PERIODS))||TIMETABLE_WEEK_DEFAULT_PERIODS));
  const existing=weeks[normalized];
  if(existing&&typeof existing==="object"){
    return {
      ...defaultWeekData(normalized,existing.periods||fallbackPeriods),
      ...existing,
      dates:Array.isArray(existing.dates)&&existing.dates.length===5?existing.dates:datesForWeek(normalized),
      entries:existing.entries&&typeof existing.entries==="object"?existing.entries:{}
    };
  }
  const template=getTimetableTemplate();
  if(template){
    return {
      ...defaultWeekData(normalized,template.periods||fallbackPeriods),
      periods:template.periods||fallbackPeriods,
      entries:cloneTimetableEntries(template.entries),
      templateApplied:true
    };
  }
  return defaultWeekData(normalized,fallbackPeriods);
}

function createTimetableGridCellContent(entry){
  const parsed=getTimetableEntry(entry);
  if(!parsed.subject)return `<span class="timetable-cell-empty">—</span>`;
  const shortMap={
    "Deutsch":"D","Mathematik":"M","Englisch":"E","Latein":"L","Französisch":"F","Spanisch":"Sp",
    "Biologie":"Bio","Chemie":"Ch","Physik":"Ph","Geschichte":"G","Geographie":"Geo","Sozialkunde":"Sk",
    "Politik und Gesellschaft":"PuG","Musik":"Mu","Kunst":"Ku","Sport":"Sp","Informatik":"Inf",
    "Ethik":"Eth","Religion":"Rel","Wirtschaft/Recht":"WR"
  };
  const short=shortMap[parsed.subject]||parsed.subject;
  const meta=[parsed.teacher,parsed.room].filter(Boolean).join(" · ");
  return `<div class="timetable-cell-content" title="${escapeHtml([parsed.subject,parsed.teacher,parsed.room].filter(Boolean).join(" · "))}">
    <span class="timetable-cell-icon">${getSubjectIcon(parsed.subject)}</span>
    <strong class="timetable-cell-subject"><span class="timetable-cell-subject-short">${escapeHtml(short)}</span><span class="timetable-cell-subject-full">${escapeHtml(parsed.subject)}</span></strong>
    ${meta?`<small class="timetable-cell-meta">${escapeHtml(meta)}</small>`:""}
  </div>`;
}

function getSchoolAssignments(){ 
  const list=load("schoolAssignments",[]);
  return Array.isArray(list)?list.filter(item=>item&&item.datum&&Number(item.period)>0):[];
}
function saveSchoolAssignments(list){save("schoolAssignments",Array.isArray(list)?list:[]);}
function assignmentColorValue(key){
  return SCHOOL_ASSIGNMENT_COLORS.find(item=>item.key===key)?.value||SCHOOL_ASSIGNMENT_COLORS[0].value;
}
function assignmentTypeLabel(type){return type==="test"?"Test":"Schulaufgabe";}
function getSchoolAssignmentsForCell(dateString,period){
  return getSchoolAssignments().filter(item=>item.datum===dateString&&Number(item.period)===Number(period));
}
function formatAssignmentDate(dateString){
  if(!dateString)return "";
  const [y,m,d]=dateString.split("-");
  return `${d}.${m}.${y}`;
}
function formatAssignmentSlot(item){
  const week=isoWeekInfo(new Date(`${item.datum}T12:00:00`));
  return `${formatAssignmentDate(item.datum)} · ${week.week}. KW · ${Number(item.period)}. Stunde`;
}
function renderSchoolAssignments(){
  const wrap=$("schoolAssignmentsList");
  if(!wrap)return;
  const list=getSchoolAssignments().slice().sort((a,b)=>`${a.datum}-${String(a.period).padStart(2,"0")}`.localeCompare(`${b.datum}-${String(b.period).padStart(2,"0")}`));
  if(!list.length){
    wrap.innerHTML=`<p class="empty-state">Noch keine Test- oder Schulaufgabentermine.</p>`;
    return;
  }
  const today=dateKeyLocal(new Date());
  const upcoming=list.filter(item=>item.datum>=today);
  const visible=(upcoming.length?upcoming:list).slice(0,18);
  wrap.innerHTML=visible.map(item=>`
    <div class="school-assignment-item" style="--assignment-color:${assignmentColorValue(item.color)}">
      <span class="school-assignment-dot" aria-hidden="true"></span>
      <div class="school-assignment-main">
        <strong>${escapeHtml(assignmentTypeLabel(item.type))} · ${escapeHtml(item.subject)}</strong>
        <span>${escapeHtml(formatAssignmentSlot(item))}</span>
        <small>${escapeHtml(item.note||"Im Stundenplan markiert")}</small>
      </div>
      <button class="btn ghost" type="button" data-remove-school-assignment="${escapeHtml(item.id)}">Löschen</button>
    </div>`).join("");
}

function getTimetableAssignmentCellContent(dateString,period){
  const assignments=getSchoolAssignmentsForCell(dateString,period);
  if(!assignments.length)return "";
  const item=assignments[0];
  return `<span class="timetable-assignment-badge" style="--assignment-color:${assignmentColorValue(item.color)}" title="${escapeHtml(assignmentTypeLabel(item.type))}">${escapeHtml(assignmentTypeLabel(item.type))}</span>`;
}

function buildTimetable(){
  const key=getCurrentTimetableWeekKey();
  const week=getTimetableWeek(key);
  const periods=getManualTimetablePeriodLimit(week);
  if($("periods"))$("periods").value=String(periods);
  renderTimetableWeekControls();

  const grid=document.createElement("div");
  grid.className="timetable-grid";
  grid.setAttribute("role","grid");
  grid.setAttribute("aria-label",`Stundenplan ${formatWeekLabel(key)}`);

  const corner=document.createElement("div");
  corner.className="timetable-grid-header";
  corner.innerHTML=`<span>Std.</span>`;
  grid.appendChild(corner);

  TIMETABLE_DAYS.forEach((day,index)=>{
    const header=document.createElement("div");
    header.className="timetable-grid-header";
    const date=week.dates[index]||datesForWeek(key)[index];
    header.innerHTML=`<span class="timetable-grid-day-short">${escapeHtml(day.short.replace(".",""))}</span>
      <span class="timetable-grid-day-full">${escapeHtml(day.name)}</span>
      <span class="timetable-grid-day-date">${escapeHtml(formatShortDate(date))}</span>`;
    grid.appendChild(header);
  });

  for(let period=1;period<=periods;period++){
    const periodCell=document.createElement("div");
    periodCell.className="timetable-grid-period";
    periodCell.textContent=String(period);
    grid.appendChild(periodCell);

    for(let day=0;day<5;day++){
      const date=week.dates[day]||datesForWeek(key)[day];
      const entry=week.entries[`${day}-${period}`];
      const parsed=getTimetableEntry(entry);
      const assignments=getSchoolAssignmentsForCell(date,period);
      const cell=document.createElement("button");
      cell.type="button";
      cell.className=`timetable-grid-cell${parsed.subject?"":" is-empty"}${assignments.length?" is-assignment":""}`;
      if(assignments.length)cell.style.setProperty("--assignment-color",assignmentColorValue(assignments[0].color));
      cell.dataset.day=String(day);
      cell.dataset.period=String(period);
      cell.dataset.date=date;
      cell.title=parsed.subject?[parsed.subject,parsed.teacher,parsed.room].filter(Boolean).join(" · "):"Freistunde / Stunde bearbeiten";
      cell.innerHTML=`${createTimetableGridCellContent(entry)}${getTimetableAssignmentCellContent(date,period)}`;
      cell.addEventListener("click",()=>homeworkTimetableMode?selectHomeworkLesson(day,period):openModal(cell));
      grid.appendChild(cell);
    }
  }

  const wrap=$("timetableWrap");
  if(!wrap)return;
  wrap.innerHTML="";
  wrap.appendChild(grid);
  const hint=$("timetableHint");
  if(hint)hint.classList.toggle("hidden",!homeworkTimetableMode);
}

function resetTimetableWeekOnly(){
  const key=getCurrentTimetableWeekKey();
  const label=formatWeekLabel(key);
  if(!confirm(`Soll nur der Stundenplan der ${label}-Woche gelöscht werden?`))return;
  const current=getTimetableWeek(key);
  const periods=getManualTimetablePeriodLimit(current);
  saveTimetableWeek(key,{
    dates:datesForWeek(key),
    entries:{},
    periods,
    clearedOnlyThisWeek:true,
    clearedAt:new Date().toISOString()
  });
  buildTimetable();
  updateImportStatus(`Stundenplan für ${label} gelöscht. Andere Wochen bleiben erhalten.`,false);
}

function resetTimetable(){
  if(!confirm("Soll der gesamte mehrwöchige Stundenplan inklusive Wochenvorlage und Schulaufgabentermine wirklich gelöscht werden?"))return;
  saveTimetableWeeks({});
  clearTimetableTemplate();
  saveSchoolAssignments([]);
  const key=isoWeekInfo().key;
  currentTimetableWeekKey=key;
  save("currentTimetableWeek",key);
  saveTimetableWeek(key,defaultWeekData(key));
  buildTimetable();
  renderSchoolAssignments();
  updateImportStatus("");
}

async function getTimetableOcrWorker(){
  if(!window.Tesseract?.createWorker) return null;
  if(!timetableOcrWorkerPromise){
    timetableOcrWorkerPromise=(async()=>{
      const worker=await Tesseract.createWorker("deu+eng");
      try{
        await worker.setParameters({
          tessedit_pageseg_mode:"6",
          preserve_interword_spaces:"1"
        });
      }catch(_){}
      return worker;
    })().catch(error=>{
      timetableOcrWorkerPromise=null;
      throw error;
    });
  }
  return timetableOcrWorkerPromise;
}
async function recognizeTimetableImage(image,mode="normal"){
  const worker=await getTimetableOcrWorker();
  if(worker){
    const result=await worker.recognize(image);
    return result?.data?.words||[];
  }
  const result=await Tesseract.recognize(image,"deu+eng",{tessedit_pageseg_mode:"6",preserve_interword_spaces:"1"});
  return result?.data?.words||[];
}
async function recognizeTimetableCellFast(canvas,x0,y0,x1,y1,mode="original"){
  const pad=3;
  const cropY0=mode==="room"?y0+(y1-y0)*.42:y0;
  const sx=Math.max(0,Math.floor(x0+pad)),sy=Math.max(0,Math.floor(cropY0+pad));
  const ex=Math.min(canvas.width,Math.ceil(x1-pad)),ey=Math.min(canvas.height,Math.ceil(y1-pad));
  if(ex<=sx||ey<=sy)return [];
  const ctx=canvas.getContext("2d",{willReadFrequently:true});
  const source=ctx.getImageData(sx,sy,ex-sx,ey-sy);
  const data=source.data;
  for(let i=0;i<data.length;i+=4){
    const r=data[i],g=data[i+1],b=data[i+2],max=Math.max(r,g,b);
    const green=g>r+5&&g>b+8&&g<248&&max<248;
    const red=r>g+12&&r>b+12&&r<248&&max<248;
    const dark=max<150;
    const keep=mode==="green"?green:(dark||green)&&!red;
    if(keep){data[i]=data[i+1]=data[i+2]=0;}
    else{data[i]=data[i+1]=data[i+2]=255;}
  }
  const scale=4;
  const out=document.createElement("canvas");
  out.width=Math.max(1,Math.round(source.width*scale));
  out.height=Math.max(1,Math.round(source.height*scale));
  const outCtx=out.getContext("2d");
  outCtx.fillStyle="#fff";outCtx.fillRect(0,0,out.width,out.height);
  const temp=document.createElement("canvas");
  temp.width=source.width;temp.height=source.height;
  temp.getContext("2d").putImageData(source,0,0);
  outCtx.drawImage(temp,0,0,out.width,out.height);
  const words=await recognizeTimetableImage(out,mode);
  return words.filter(word=>word.text?.trim()).map(word=>({
    ...word,
    bbox:{
      x0:word.bbox.x0/scale+sx,x1:word.bbox.x1/scale+sx,
      y0:word.bbox.y0/scale+sy,y1:word.bbox.y1/scale+sy
    },
    color:mode==="green"?"green":classifyWordColor(canvas,{
      bbox:{
        x0:word.bbox.x0/scale+sx,x1:word.bbox.x1/scale+sx,
        y0:word.bbox.y0/scale+sy,y1:word.bbox.y1/scale+sy
      }
    })
  }));
}

function detectRobustPeriodCenters(words,hLines,tableTop,tableBottom,columnBounds,canvas){
  let centers=getPeriodCenters(words,hLines,tableTop,tableBottom,columnBounds,canvas);
  const labelX0=columnBounds?.[0]??0,labelX1=columnBounds?.[1]??canvas.width/6;
  const labels=[];
  for(const word of words||[]){
    const x=(word.bbox.x0+word.bbox.x1)/2,y=(word.bbox.y0+word.bbox.y1)/2;
    const raw=cleanOcrToken(word.text).replace(/[.,:]/g,"");
    if(x<labelX0-4||x>labelX1+4||y<=tableTop||y>=tableBottom||!/^\d{1,2}$/.test(raw))continue;
    const n=Number(raw);
    if(n>=0&&n<=15)labels.push({n,y});
  }
  labels.sort((a,b)=>a.y-b.y);
  const unique=[];
  for(const item of labels){
    if(!unique.some(x=>x.n===item.n))unique.push(item);
  }
  if(unique.length>=2){
    const labelGaps=unique.slice(1).map((item,i)=>item.y-unique[i].y).filter(g=>g>8).sort((a,b)=>a-b);
    const step=labelGaps.length?labelGaps[Math.floor(labelGaps.length/2)]:null;
    const start=unique.find(item=>item.n>0)||unique[0];
    if(step&&start){
      const maxLabel=Math.max(...unique.map(x=>x.n));
      const minLabel=Math.max(1,start.n);
      const generated=[];
      for(let p=minLabel;p<=maxLabel&&p<=15;p++){
        generated.push([p,start.y+(p-start.n)*step]);
      }
      if(generated.length>=centers.length)centers=generated;
    }
    const byPeriod=new Map(centers);
    unique.forEach(item=>{if(item.n>=1)byPeriod.set(item.n,item.y);});
    centers=[...byPeriod.entries()].filter(([p])=>p>=1&&p<=15).sort((a,b)=>a[0]-b[0]).map(([p,y])=>[p,y]);
  }
  if(!centers.length){
    const count=Math.max(4,Math.min(15,Math.round((tableBottom-tableTop)/64)));
    const h=(tableBottom-tableTop)/count;
    centers=Array.from({length:count},(_,i)=>[i+1,tableTop+h*(i+.5)]);
  }
  return centers.slice(0,15);
}

async function importTimetableScreenshot(file,mode="current"){
  if(!file)return;
  timetableImportMode=mode;
  if(!window.Tesseract){
    updateImportStatus("Die OCR-Erkennung konnte nicht geladen werden. Prüfe die Internetverbindung.",true);
    return;
  }
  updateImportStatus(mode==="template"?"Wöchentliche Vorlage wird erkannt …":"Stundenplan wird erkannt …");
  try{
    const canvas=await getScreenshotCanvas(file);
    const imageWidth=canvas.width,imageHeight=canvas.height;
    if(imageWidth<250||imageHeight<180)throw new Error("Das Bild ist zu klein für einen Stundenplan.");

    updateImportStatus("Tabellenraster wird erkannt …");
    const firstWords=(await recognizeTimetableImage(canvas)).filter(word=>word.text?.trim()&&Number(word.confidence||0)>=5);
    if(firstWords.length<5)throw new Error("Zu wenig Text erkannt. Bitte einen vollständigen Stundenplan-Screenshot verwenden.");

    const headerData=findDateHeaderData(firstWords,canvas);
    const columnBounds=getColumnBounds(canvas,headerData,firstWords);
    const headerInfo=findHeaderBottom(firstWords,canvas,columnBounds);
    let tableTop=headerInfo.bottom;
    let hLines=detectTableLines(canvas,true,Math.max(0,tableTop-2),Math.floor(imageHeight*.985),Math.max(0,columnBounds[0]),Math.min(imageWidth,columnBounds[6]));

    const zeroCenter=findPeriodZeroCenter(firstWords,columnBounds,tableTop-2);
    if(zeroCenter!=null){
      const topLine=hLines.map(line=>line.pos).filter(y=>y<zeroCenter-1&&y>=tableTop-4).sort((a,b)=>a-b).pop();
      if(topLine!=null){
        tableTop=topLine;
        hLines=detectTableLines(canvas,true,Math.max(0,tableTop-2),Math.floor(imageHeight*.985),Math.max(0,columnBounds[0]),Math.min(imageWidth,columnBounds[6]));
      }
    }

    const bottomLine=chooseTableBottomLine(hLines,canvas,columnBounds,tableTop);
    const tableBottom=bottomLine??Math.min(imageHeight-2,Math.max(...firstWords.map(word=>word.bbox.y1),tableTop+220));
    const periodCenters=detectRobustPeriodCenters(firstWords,hLines,tableTop,tableBottom,columnBounds,canvas);
    if(!periodCenters.length)throw new Error("Die Stundenzeilen konnten nicht erkannt werden.");

    const greenMask=buildMaskCanvas(canvas,"green");
    let greenWords=[];
    if(greenMask.hits>40){
      updateImportStatus("Farbige Einträge werden bevorzugt …");
      greenWords=(await recognizeTimetableImage(greenMask.canvas,"green")).filter(word=>word.text?.trim()&&Number(word.confidence||0)>=2).map(word=>({...word,color:"green"}));
    }

    const timetable=buildImportEntries(firstWords,greenWords,canvas,columnBounds,periodCenters,tableTop,tableBottom,hLines);
    const rowBounds=buildTimetableRowBounds(periodCenters,tableTop,tableBottom,hLines);
    const occupiedCells=findOccupiedTimetableCells(canvas,columnBounds,rowBounds);

    // Nur tatsächlich belegte Zellen nachprüfen. Mit einem persistenten OCR-Worker
    // bleibt der Fallback schnell und der alte bis-zu-45-Zellen-Flaschenhals entfällt.
    const fallbackCells=occupiedCells
      .filter(item=>!timetable[item.key]||subjectQuality(getTimetableEntry(timetable[item.key]).subject)<3)
      .sort((a,b)=>Number(b.green)-Number(a.green))
      .slice(0,18);

    for(let i=0;i<fallbackCells.length;i++){
      const {day,period}=fallbackCells[i];
      const row=rowBounds.find(item=>item.period===period);
      if(!row)continue;
      const cellTop=row.top,cellBottom=row.bottom;
      const dayLeft=columnBounds[day+1],dayRight=columnBounds[day+2];
      let parsed=parseTimetableCell(await recognizeTimetableCellFast(canvas,dayLeft,cellTop,dayRight,cellBottom,"original"),cellTop,cellBottom);
      if(fallbackCells[i].green){
        const greenParsed=parseTimetableCell(await recognizeTimetableCellFast(canvas,dayLeft,cellTop,dayRight,cellBottom,"green"),cellTop,cellBottom);
        if(greenParsed?.subject)parsed=mergeTimetableEntry(parsed,greenParsed);
      }
      if(parsed?.subject)timetable[fallbackCells[i].key]=mergeTimetableEntry(timetable[fallbackCells[i].key],parsed);
    }

    // Zusätzliche Sicherheit für sparse Screenshots: Jede belegte Zelle, die von
    // der globalen OCR nicht verstanden wurde, bleibt nicht stillschweigend verloren.
    const unresolved=occupiedCells.filter(item=>!timetable[item.key]&&getTimetableEntry(timetable[item.key]).subject==="");
    if(unresolved.length&&fallbackCells.length<18){
      for(const item of unresolved.slice(0,18-fallbackCells.length)){
        const row=rowBounds.find(r=>r.period===item.period); if(!row)continue;
        const parsed=parseTimetableCell(await recognizeTimetableCellFast(canvas,columnBounds[item.day+1],row.top,columnBounds[item.day+2],row.bottom,"original"),row.top,row.bottom);
        if(parsed?.subject)timetable[item.key]=parsed;
      }
    }

    if(!Object.keys(timetable).length)throw new Error("Kein gültiges Fach erkannt. Rote Einträge werden bewusst ignoriert.");

    const targetWeekKey=headerData.weekKey||getCurrentTimetableWeekKey();
    const targetDates=headerData.dates?.length===5?headerData.dates:datesForWeek(targetWeekKey);
    const visiblePeriod=Math.max(6,Math.min(15,Math.max(...periodCenters.map(item=>Number(item[0])||0))));

    const importedAt=new Date().toISOString();
    if(mode==="template"){
      timetableTemplateDraft={entries:cloneTimetableEntries(timetable),periods:visiblePeriod,importedAt};
      $("timetableTemplateModal")?.classList.remove("hidden");
      $("timetableTemplateModal")?.setAttribute("aria-hidden","false");
      if($("templatePeriods"))$("templatePeriods").value=String(visiblePeriod);
      renderTimetableTemplateEditor();
      const status=$("timetableTemplateStatus");
      if(status){status.textContent="Screenshot übernommen. Du kannst den Wochenplan jetzt noch bearbeiten und anschließend speichern.";status.classList.remove("hidden");}
    }else{
      saveTimetableWeek(targetWeekKey,{
        dates:targetDates,
        entries:timetable,
        periods:visiblePeriod,
        importedAt
      });
      setCurrentTimetableWeek(targetWeekKey);
      const dayCount=new Set(Object.keys(timetable).map(key=>key.split("-")[0])).size;
      updateImportStatus(`${Object.keys(timetable).length} Stunden importiert · ${dayCount} Tage erkannt · ${formatWeekLabel(targetWeekKey)}.`,false);
    }
  }catch(error){
    console.error("Stundenplan-Import:",error);
    updateImportStatus(`Import fehlgeschlagen: ${error?.message||"Unbekannter Fehler"}`,true);
  }
}

function shiftAssignmentWeek(delta){
  const key=normalizeWeekKey(schoolAssignmentDraft?.weekKey||getCurrentTimetableWeekKey());
  const match=key.match(/^(\d{4})-W(\d{2})$/);
  const monday=isoWeekMonday(Number(match[1]),Number(match[2]));
  monday.setDate(monday.getDate()+Number(delta)*7);
  schoolAssignmentDraft.weekKey=isoWeekInfo(monday).key;
  schoolAssignmentDraft.day=null;
  schoolAssignmentDraft.period=null;
  renderSchoolAssignmentPicker();
}
function setAssignmentWeekToday(){
  schoolAssignmentDraft.weekKey=isoWeekInfo().key;
  schoolAssignmentDraft.day=null;
  schoolAssignmentDraft.period=null;
  renderSchoolAssignmentPicker();
}
function renderAssignmentSubjectSelect(){
  const select=$("assignmentSubject");
  if(!select)return;
  const subjects=[...new Set([...subjectsBayern,...getActiveSubjects()])];
  const previous=select.value;
  select.innerHTML=subjects.map(subject=>`<option value="${escapeHtml(subject)}">${escapeHtml(subject)}</option>`).join("");
  if(subjects.includes(previous))select.value=previous;
}

function openSchoolAssignmentModal(){
  schoolAssignmentDraft={
    weekKey:getCurrentTimetableWeekKey(),
    day:null,period:null,
    color:SCHOOL_ASSIGNMENT_COLORS[0].key,
    type:"schulaufgabe"
  };
  renderAssignmentSubjectSelect();
  $("assignmentType").value="schulaufgabe";
  $("schoolAssignmentModal").classList.remove("hidden");
  $("schoolAssignmentModal").setAttribute("aria-hidden","false");
  renderSchoolAssignmentPicker();
}
function closeSchoolAssignmentModal(){
  const modal=$("schoolAssignmentModal");
  if(modal){
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden","true");
  }
  schoolAssignmentDraft=null;
}
function renderSchoolAssignmentPicker(){
  if(!schoolAssignmentDraft)return;
  const key=normalizeWeekKey(schoolAssignmentDraft.weekKey);
  const week=getTimetableWeek(key);
  $("assignmentWeekLabel").textContent=formatWeekLabel(key);
  $("assignmentWeekSub").textContent=`${formatLongDate(week.dates[0])} – ${formatLongDate(week.dates[4])}`;
  const grid=$("schoolAssignmentGrid");
  if(!grid)return;
  grid.innerHTML=`<div class="assignment-corner">Std.</div>`+
    TIMETABLE_DAYS.map((day,index)=>`<div class="assignment-day"><span>${escapeHtml(day.short.replace(".",""))}</span><small>${escapeHtml(formatShortDate(week.dates[index]))}</small></div>`).join("");

  for(let period=1;period<=Math.min(15,Number(week.periods)||6);period++){
    const p=document.createElement("div");
    p.className="assignment-period"; p.textContent=String(period); grid.appendChild(p);
    for(let day=0;day<5;day++){
      const date=week.dates[day];
      const entry=getTimetableEntry(week.entries[`${day}-${period}`]);
      const existing=getSchoolAssignmentsForCell(date,period)[0];
      const cell=document.createElement("button");
      cell.type="button";
      cell.className=`assignment-cell${schoolAssignmentDraft.day===day&&schoolAssignmentDraft.period===period?" selected":""}${existing?" has-existing":""}`;
      if(existing)cell.style.setProperty("--existing-assignment-color",assignmentColorValue(existing.color));
      cell.dataset.day=String(day);cell.dataset.period=String(period);
      cell.innerHTML=entry.subject?`<strong>${escapeHtml(entry.subject)}</strong><small>${escapeHtml([entry.teacher,entry.room].filter(Boolean).join(" · ")||"Stunde")}</small>`:`<strong>—</strong><small>frei</small>`;
      cell.addEventListener("click",()=>{
        schoolAssignmentDraft.day=day;
        schoolAssignmentDraft.period=period;
        if(entry.subject){
          const select=$("assignmentSubject");
          if([...select.options].some(o=>o.value===entry.subject))select.value=entry.subject;
          else{
            const option=document.createElement("option");option.value=entry.subject;option.textContent=entry.subject;select.appendChild(option);select.value=entry.subject;
          }
        }
        renderSchoolAssignmentPicker();
      });
      grid.appendChild(cell);
    }
  }

  const selected=$("assignmentSelectionText");
  if(selected){
    if(schoolAssignmentDraft.day==null||schoolAssignmentDraft.period==null){
      selected.textContent="Noch keine Stunde ausgewählt.";
    }else{
      const date=week.dates[schoolAssignmentDraft.day];
      const entry=getTimetableEntry(week.entries[`${schoolAssignmentDraft.day}-${schoolAssignmentDraft.period}`]);
      selected.textContent=`${assignmentTypeLabel(schoolAssignmentDraft.type)} · ${entry.subject||$("assignmentSubject")?.value||"Fach"} · ${formatAssignmentDate(date)} · ${schoolAssignmentDraft.period}. Stunde`;
    }
  }
  const colors=$("assignmentColorOptions");
  if(colors){
    colors.innerHTML=SCHOOL_ASSIGNMENT_COLORS.map(color=>`<button class="assignment-color${schoolAssignmentDraft.color===color.key?" selected":""}" type="button" data-assignment-color="${color.key}" style="--assignment-color:${color.value}"><span class="swatch"></span>${escapeHtml(color.label)}</button>`).join("");
  }
}

function saveSchoolAssignment(){
  if(!schoolAssignmentDraft||schoolAssignmentDraft.day==null||schoolAssignmentDraft.period==null){
    alert("Bitte wähle zuerst eine Stunde aus.");
    return;
  }
  const key=normalizeWeekKey(schoolAssignmentDraft.weekKey);
  const week=getTimetableWeek(key);
  const date=week.dates[schoolAssignmentDraft.day];
  const entry=getTimetableEntry(week.entries[`${schoolAssignmentDraft.day}-${schoolAssignmentDraft.period}`]);
  const subject=entry.subject||$("assignmentSubject").value;
  if(!subject){
    alert("Bitte wähle ein Fach aus.");
    return;
  }
  const list=getSchoolAssignments();
  const id=`${date}-${schoolAssignmentDraft.period}`;
  const item={
    id,type:schoolAssignmentDraft.type,subject,
    datum:date,weekKey:key,period:Number(schoolAssignmentDraft.period),
    color:schoolAssignmentDraft.color,createdAt:new Date().toISOString()
  };
  const filtered=list.filter(existing=>existing.id!==id);
  filtered.push(item);
  saveSchoolAssignments(filtered);
  renderSchoolAssignments();
  buildTimetable();
  closeSchoolAssignmentModal();
}

document.addEventListener("DOMContentLoaded",()=>{
  $("importWeeklyTimetableBtn")?.addEventListener("click",openTimetableTemplateEditor);
  $("templateImportBtn")?.addEventListener("click",()=>$("timetableTemplateImageInput")?.click());
  $("timetableTemplateImageInput")?.addEventListener("change",event=>{
    const file=event.target.files?.[0];
    if(file)importTimetableScreenshot(file,"template");
    event.target.value="";
  });
  $("closeTimetableTemplateBtn")?.addEventListener("click",closeTimetableTemplateEditor);
  $("cancelTimetableTemplateBtn")?.addEventListener("click",closeTimetableTemplateEditor);
  $("saveTimetableTemplateBtn")?.addEventListener("click",saveTimetableTemplateFromEditor);
  $("templateClearBtn")?.addEventListener("click",clearTimetableTemplateDraft);
  $("templatePeriods")?.addEventListener("change",()=>{
    if(timetableTemplateDraft){
      timetableTemplateDraft.periods=Math.min(15,Math.max(1,Number($("templatePeriods").value)||6));
      renderTimetableTemplateEditor();
    }
  });
  $("schoolAssignmentBtn")?.addEventListener("click",openSchoolAssignmentModal);
  $("assignmentPrevWeek")?.addEventListener("click",()=>shiftAssignmentWeek(-1));
  $("assignmentNextWeek")?.addEventListener("click",()=>shiftAssignmentWeek(1));
  $("assignmentTodayWeek")?.addEventListener("click",setAssignmentWeekToday);
  $("assignmentType")?.addEventListener("change",event=>{
    if(schoolAssignmentDraft){schoolAssignmentDraft.type=event.target.value;renderSchoolAssignmentPicker();}
  });
  $("assignmentSubject")?.addEventListener("change",()=>renderSchoolAssignmentPicker());
  $("assignmentColorOptions")?.addEventListener("click",event=>{
    const btn=event.target.closest("[data-assignment-color]");
    if(!btn||!schoolAssignmentDraft)return;
    schoolAssignmentDraft.color=btn.dataset.assignmentColor;
    renderSchoolAssignmentPicker();
  });
  $("saveSchoolAssignmentBtn")?.addEventListener("click",saveSchoolAssignment);
  $("schoolAssignmentsList")?.addEventListener("click",event=>{
    const btn=event.target.closest("[data-remove-school-assignment]");
    if(!btn)return;
    const id=btn.dataset.removeSchoolAssignment;
    saveSchoolAssignments(getSchoolAssignments().filter(item=>item.id!==id));
    renderSchoolAssignments();
    buildTimetable();
  });

  renderSchoolAssignments();
  buildTimetable();
});

function closeHomeworkTimetable(){
  $("homeworkTimetableModal")?.classList.add("hidden");
  $("homeworkTimetableModal")?.setAttribute("aria-hidden","true");
  homeworkTimetableMode=false;
  const hint=$("timetableHint");
  if(hint)hint.classList.add("hidden");
}

async function getScreenshotCanvas(file){
  const canvas=await getScreenshotCanvasOriginal(file);
  // Sehr große Handy-Screenshots bremsen OCR und Pixelanalyse unverhältnismäßig.
  // 2400 px auf der langen Kante erhalten die Tabellenstruktur, halten aber
  // Speicherverbrauch und Tesseract-Laufzeit deutlich niedriger.
  const maxDimension=2400;
  const maxCurrent=Math.max(canvas.width,canvas.height);
  if(maxCurrent<=maxDimension)return canvas;
  const scale=maxDimension/maxCurrent;
  const resized=document.createElement("canvas");
  resized.width=Math.max(1,Math.round(canvas.width*scale));
  resized.height=Math.max(1,Math.round(canvas.height*scale));
  resized.getContext("2d",{willReadFrequently:true}).drawImage(canvas,0,0,resized.width,resized.height);
  return resized;
}


/* ===== v46: Notendarstellung, gemeinsame Farben, HA-Auswahl ===== */
function getOccupiedTimetablePeriodCount(week){
  let maxPeriod=0;
  for(const [key,value] of Object.entries(week?.entries||{})){
    const match=String(key).match(/^([0-4])-(\d{1,2})$/);
    if(!match)continue;
    const period=Number(match[2]);
    if(period>=1&&period<=15&&getTimetableEntry(value).subject.trim())maxPeriod=Math.max(maxPeriod,period);
  }
  return maxPeriod;
}

function renderTimetableNoLessons(container,message="In dieser Woche sind noch keine Stunden eingetragen."){
  container.innerHTML=`<div class="timetable-empty-state"><strong>Kein Stundenplan</strong><span>${escapeHtml(message)}</span></div>`;
}

function getManualTimetablePeriodLimit(week){
  const stored=Number(week?.periods);
  const fallback=Number(load("timetablePeriods",TIMETABLE_WEEK_DEFAULT_PERIODS));
  return Math.min(15,Math.max(1,stored||fallback||TIMETABLE_WEEK_DEFAULT_PERIODS));
}

function setTimetablePeriodsAutomatically(){
  const key=getCurrentTimetableWeekKey();
  const week=getTimetableWeek(key);
  const occupied=getOccupiedTimetablePeriodCount(week);
  const periods=occupied||TIMETABLE_WEEK_DEFAULT_PERIODS;
  week.periods=periods;
  saveTimetableWeek(key,week);
  save("timetablePeriods",periods);
  if($("periods"))$("periods").value=String(periods);
  buildTimetable();
}

function buildTimetable(){
  const key=getCurrentTimetableWeekKey();
  const week=getTimetableWeek(key);
  const periods=getManualTimetablePeriodLimit(week);
  const wrap=$("timetableWrap");
  if(!wrap)return;
  renderTimetableWeekControls();
  const periodInput=$("periods");
  if(periodInput){
    periodInput.value=String(periods);
    periodInput.title="Beim Import wird automatisch bis zur letzten belegten Stunde gesetzt. Du kannst die Grenze hier jederzeit selbst ändern.";
  }
  wrap.innerHTML="";

  if(!periods){
    renderTimetableNoLessons(wrap);
    return;
  }

  const grid=document.createElement("div");
  grid.className="timetable-grid";
  grid.setAttribute("role","grid");
  grid.setAttribute("aria-label",`Stundenplan ${formatWeekLabel(key)}`);

  const corner=document.createElement("div");
  corner.className="timetable-grid-header";
  corner.innerHTML=`<span>Std.</span>`;
  grid.appendChild(corner);

  TIMETABLE_DAYS.forEach((day,index)=>{
    const header=document.createElement("div");
    header.className="timetable-grid-header";
    const date=week.dates[index]||datesForWeek(key)[index];
    header.innerHTML=`<span class="timetable-grid-day-short">${escapeHtml(day.short.replace(".",""))}</span>
      <span class="timetable-grid-day-full">${escapeHtml(day.name)}</span>
      <span class="timetable-grid-day-date">${escapeHtml(formatShortDate(date))}</span>`;
    grid.appendChild(header);
  });

  for(let period=1;period<=periods;period++){
    const periodCell=document.createElement("div");
    periodCell.className="timetable-grid-period";
    periodCell.textContent=String(period);
    grid.appendChild(periodCell);

    for(let day=0;day<5;day++){
      const date=week.dates[day]||datesForWeek(key)[day];
      const entry=week.entries[`${day}-${period}`];
      const parsed=getTimetableEntry(entry);
      const assignments=getSchoolAssignmentsForCell(date,period);
      const cell=document.createElement("button");
      cell.type="button";
      cell.className=`timetable-grid-cell${parsed.subject?"":" is-empty"}${assignments.length?" is-assignment":""}`;
      if(assignments.length)cell.style.setProperty("--assignment-color",assignmentColorValue(assignments[0].color));
      cell.dataset.day=String(day);
      cell.dataset.period=String(period);
      cell.dataset.date=date;
      cell.title=parsed.subject
        ? [parsed.subject,parsed.teacher,parsed.room].filter(Boolean).join(" · ")
        : "Freistunde / Stunde bearbeiten";
      cell.innerHTML=`${createTimetableGridCellContent(entry)}${getTimetableAssignmentCellContent(date,period)}`;
      cell.addEventListener("click",()=>openModal(cell));
      grid.appendChild(cell);
    }
  }

  wrap.appendChild(grid);
  const hint=$("timetableHint");
  if(hint)hint.classList.toggle("hidden",!homeworkTimetableMode);
}

let homeworkPickerWeekKey=null;
let homeworkPickerDay=null;
let homeworkPickerPeriod=null;

function renderHomeworkTimetablePicker(){
  const grid=$("homeworkTimetableGrid");
  if(!grid)return;
  const key=normalizeWeekKey(homeworkPickerWeekKey||getCurrentTimetableWeekKey());
  homeworkPickerWeekKey=key;
  const week=getTimetableWeek(key);
  const periods=getOccupiedTimetablePeriodCount(week);
  const label=$("homeworkWeekLabel");
  const sub=$("homeworkWeekSub");
  if(label)label.textContent=formatWeekLabel(key);
  if(sub)sub.textContent=`${formatLongDate(week.dates[0])} – ${formatLongDate(week.dates[4])}`;

  grid.innerHTML="";
  if(!periods){
    renderTimetableNoLessons(grid,"In dieser Woche sind keine belegten Stunden vorhanden.");
    const selection=$("homeworkSelectionText");
    if(selection)selection.textContent="Keine belegte Stunde auswählbar.";
    return;
  }

  grid.className="homework-timetable-grid school-assignment-grid homework-picker-grid";
  const corner=document.createElement("div");
  corner.className="assignment-corner";
  corner.textContent="Std.";
  grid.appendChild(corner);

  TIMETABLE_DAYS.forEach((day,index)=>{
    const header=document.createElement("div");
    header.className="assignment-day";
    header.innerHTML=`<span>${escapeHtml(day.short.replace(".",""))}</span><small>${escapeHtml(formatShortDate(week.dates[index]))}</small>`;
    grid.appendChild(header);
  });

  for(let period=1;period<=periods;period++){
    const p=document.createElement("div");
    p.className="assignment-period";
    p.textContent=String(period);
    grid.appendChild(p);
    for(let day=0;day<5;day++){
      const date=week.dates[day];
      const entry=getTimetableEntry(week.entries[`${day}-${period}`]);
      const filled=Boolean(entry.subject);
      const cell=document.createElement("button");
      cell.type="button";
      cell.className=`assignment-cell homework-picker-cell${homeworkPickerDay===day&&homeworkPickerPeriod===period?" selected":""}${filled?"":" is-free"}`;
      cell.disabled=!filled;
      cell.innerHTML=filled
        ? `<strong>${escapeHtml(entry.subject)}</strong><small>${escapeHtml([entry.teacher,entry.room].filter(Boolean).join(" · ")||"Stunde")}</small>`
        : `<strong>—</strong><small>frei</small>`;
      if(filled){
        cell.addEventListener("click",()=>{
          homeworkPickerDay=day;
          homeworkPickerPeriod=period;
          const selection=$("homeworkSelectionText");
          if(selection){
            selection.textContent=`${entry.subject} · ${formatLongDate(date)} · ${period}. Stunde`;
          }
          renderHomeworkTimetablePicker();
        });
      }
      grid.appendChild(cell);
    }
  }

  const selection=$("homeworkSelectionText");
  if(selection){
    if(homeworkPickerDay==null||homeworkPickerPeriod==null){
      selection.textContent="Noch keine Stunde ausgewählt.";
    }else{
      const date=week.dates[homeworkPickerDay];
      const entry=getTimetableEntry(week.entries[`${homeworkPickerDay}-${homeworkPickerPeriod}`]);
      selection.textContent=`${entry.subject||"Fach"} · ${formatLongDate(date)} · ${homeworkPickerPeriod}. Stunde`;
    }
  }
}

function openHomeworkTimetable(){
  homeworkTimetableMode=true;
  homeworkPickerWeekKey=getCurrentTimetableWeekKey();
  homeworkPickerDay=null;
  homeworkPickerPeriod=null;
  const modal=$("homeworkTimetableModal");
  if(modal){
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden","false");
  }
  renderHomeworkTimetablePicker();
}

function closeHomeworkTimetable(){
  const modal=$("homeworkTimetableModal");
  if(modal){
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden","true");
  }
  homeworkTimetableMode=false;
  homeworkPickerDay=null;
  homeworkPickerPeriod=null;
}

function selectHomeworkLesson(day,period){
  const week=getTimetableWeek(normalizeWeekKey(homeworkPickerWeekKey||getCurrentTimetableWeekKey()));
  const entry=getTimetableEntry(week.entries[`${day}-${period}`]);
  if(!entry.subject){
    alert("Bitte wähle eine belegte Stunde aus.");
    return;
  }
  const active=getActiveSubjects();
  if(!active.includes(entry.subject))saveActiveSubjects([...active,entry.subject]);
  refreshSubjectSelects();
  $("hwFachSelect").value=entry.subject;
  $("hwDatum").value=week.dates[day]||dateKeyLocal(new Date());
  closeHomeworkTimetable();
  document.querySelectorAll(".nav-item").forEach(item=>item.classList.toggle("active",item.dataset.page==="hausaufgaben"));
  showPage("hausaufgaben");
}

function confirmHomeworkLesson(){
  if(homeworkPickerDay==null || homeworkPickerPeriod==null){
    alert("Bitte wähle zuerst eine belegte Stunde aus.");
    return;
  }
  selectHomeworkLesson(homeworkPickerDay,homeworkPickerPeriod);
}

function shiftHomeworkWeek(delta){
  const key=normalizeWeekKey(homeworkPickerWeekKey||getCurrentTimetableWeekKey());
  const match=key.match(/^(\d{4})-W(\d{2})$/);
  if(!match)return;
  const monday=isoWeekMonday(Number(match[1]),Number(match[2]));
  monday.setDate(monday.getDate()+Number(delta)*7);
  homeworkPickerWeekKey=isoWeekInfo(monday).key;
  homeworkPickerDay=null;
  homeworkPickerPeriod=null;
  renderHomeworkTimetablePicker();
}

function setHomeworkWeekToday(){
  homeworkPickerWeekKey=isoWeekInfo().key;
  homeworkPickerDay=null;
  homeworkPickerPeriod=null;
  renderHomeworkTimetablePicker();
}

function renderSchoolAssignmentPicker(){
  if(!schoolAssignmentDraft)return;
  const key=normalizeWeekKey(schoolAssignmentDraft.weekKey);
  const week=getTimetableWeek(key);
  const periods=getOccupiedTimetablePeriodCount(week);
  $("assignmentWeekLabel").textContent=formatWeekLabel(key);
  $("assignmentWeekSub").textContent=`${formatLongDate(week.dates[0])} – ${formatLongDate(week.dates[4])}`;
  const grid=$("schoolAssignmentGrid");
  if(!grid)return;
  grid.className="school-assignment-grid";
  grid.innerHTML="";

  if(!periods){
    renderTimetableNoLessons(grid,"In dieser Woche sind keine belegten Stunden vorhanden.");
  }else{
    const corner=document.createElement("div");
    corner.className="assignment-corner";
    corner.textContent="Std.";
    grid.appendChild(corner);

    TIMETABLE_DAYS.forEach((day,index)=>{
      const header=document.createElement("div");
      header.className="assignment-day";
      header.innerHTML=`<span>${escapeHtml(day.short.replace(".",""))}</span><small>${escapeHtml(formatShortDate(week.dates[index]))}</small>`;
      grid.appendChild(header);
    });

    for(let period=1;period<=periods;period++){
      const p=document.createElement("div");
      p.className="assignment-period";
      p.textContent=String(period);
      grid.appendChild(p);
      for(let day=0;day<5;day++){
        const date=week.dates[day];
        const entry=getTimetableEntry(week.entries[`${day}-${period}`]);
        const filled=Boolean(entry.subject);
        const existing=getSchoolAssignmentsForCell(date,period)[0];
        const cell=document.createElement("button");
        cell.type="button";
        cell.disabled=!filled;
        cell.className=`assignment-cell${schoolAssignmentDraft.day===day&&schoolAssignmentDraft.period===period?" selected":""}${existing?" has-existing":""}${filled?"":" is-free"}`;
        if(existing)cell.style.setProperty("--existing-assignment-color",assignmentColorValue(existing.color));
        cell.innerHTML=filled
          ? `<strong>${escapeHtml(entry.subject)}</strong><small>${escapeHtml([entry.teacher,entry.room].filter(Boolean).join(" · ")||"Stunde")}</small>`
          : `<strong>—</strong><small>frei</small>`;
        if(filled){
          cell.addEventListener("click",()=>{
            schoolAssignmentDraft.day=day;
            schoolAssignmentDraft.period=period;
            const select=$("assignmentSubject");
            if([...select.options].some(o=>o.value===entry.subject))select.value=entry.subject;
            else{
              const option=document.createElement("option");
              option.value=entry.subject;
              option.textContent=entry.subject;
              select.appendChild(option);
              select.value=entry.subject;
            }
            renderSchoolAssignmentPicker();
          });
        }
        grid.appendChild(cell);
      }
    }
  }

  const selected=$("assignmentSelectionText");
  if(selected){
    if(schoolAssignmentDraft.day==null||schoolAssignmentDraft.period==null){
      selected.textContent="Noch keine Stunde ausgewählt.";
    }else{
      const date=week.dates[schoolAssignmentDraft.day];
      const entry=getTimetableEntry(week.entries[`${schoolAssignmentDraft.day}-${schoolAssignmentDraft.period}`]);
      selected.textContent=`${assignmentTypeLabel(schoolAssignmentDraft.type)} · ${entry.subject||$("assignmentSubject")?.value||"Fach"} · ${formatAssignmentDate(date)} · ${schoolAssignmentDraft.period}. Stunde`;
    }
  }

  const colors=$("assignmentColorOptions");
  if(colors){
    colors.innerHTML=SCHOOL_ASSIGNMENT_COLORS.map(color=>`<button class="assignment-color${schoolAssignmentDraft.color===color.key?" selected":""}" type="button" data-assignment-color="${color.key}" style="--assignment-color:${color.value}"><span class="swatch"></span>${escapeHtml(color.label)}</button>`).join("");
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  $("homeworkPrevWeek")?.addEventListener("click",()=>shiftHomeworkWeek(-1));
  $("homeworkNextWeek")?.addEventListener("click",()=>shiftHomeworkWeek(1));
  $("homeworkTodayWeek")?.addEventListener("click",setHomeworkWeekToday);
});
