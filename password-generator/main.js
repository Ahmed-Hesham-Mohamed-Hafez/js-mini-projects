document.addEventListener('DOMContentLoaded', function() {
    
    
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    
    const lengthSlider = document.getElementById('lengthSlider');
    const lengthValue = document.getElementById('lengthValue');
    const uppercaseCheck = document.getElementById('uppercase');
    const lowercaseCheck = document.getElementById('lowercase');
    const numbersCheck = document.getElementById('numbers');
    const symbolsCheck = document.getElementById('symbols');
    const generateBtn = document.getElementById('generateBtn');
    const passwordOutput = document.getElementById('passwordOutput');
    const copyBtn = document.getElementById('copyBtn');
    const strengthText = document.getElementById('strengthText');
    
    lengthSlider.addEventListener('input', function() {
        lengthValue.textContent = lengthSlider.value;
    });
    
   
    function generatePassword() {
        const length = parseInt(lengthSlider.value);
        let charset = '';
        
        
        if (uppercaseCheck.checked) charset += uppercase;
        if (lowercaseCheck.checked) charset += lowercase;
        if (numbersCheck.checked) charset += numbers;
        if (symbolsCheck.checked) charset += symbols;
        
        
        if (charset === '') {
            alert('Please select at least one character type!');
            return;
        }
        
        
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        
        passwordOutput.value = password;
        
        
        calculateStrength(password);
    }
    
    
    function calculateStrength(password) {
        let score = 0;
        
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (/[A-Z]/.test(password)) score++; 
        if (/[a-z]/.test(password)) score++; 
        if (/[0-9]/.test(password)) score++; 
        if (/[^A-Za-z0-9]/.test(password)) score++; 
        
        let strength;
        if (score <= 2) strength = 'Weak 🔴';
        else if (score <= 4) strength = 'Medium 🟡';
        else strength = 'Strong 🟢';
        
        strengthText.textContent = strength;
    }
    
    
    function copyToClipboard() {
        if (passwordOutput.value === '') {
            alert('Generate a password first!');
            return;
        }
        
        passwordOutput.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }
    
   
    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyToClipboard);
    
});