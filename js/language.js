// main.js (linked after translations.js in your HTML)

// Function to update the content with the selected language
function updateContent(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[language][key];
    });
  
    // Update the language toggle button text
    const languageToggle = document.getElementById('languageToggle');
    languageToggle.textContent = language === 'fr' ? 'English' : 'Français';
  }
  
  // Set default language to French (fr)
  let currentLanguage = 'fr';
  updateContent(currentLanguage);
  
  // Add event listener to the language toggle button
  const languageToggle = document.getElementById('languageToggle');
  languageToggle.addEventListener('click', () => {
    // Toggle between English (en) and French (fr)
    currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    updateContent(currentLanguage);
});
  