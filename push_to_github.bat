@echo off
chcp 65001 >nul
title NERVEUX - Envoi sur GitHub
cd /d "%~dp0"

echo ================================================================
echo       NERVEUX - Synchronisation GitHub (4ure1/NERVEUX-)
echo ================================================================
echo.

:: 1. Verifier si git est disponible
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERREUR] Git n'est pas installe ou n'est pas dans le PATH.
    echo Veuillez installer Git : https://git-scm.com/
    echo.
    pause
    exit /b 1
)

:: 2. Obtenir la branche courante
for /f "delims=" %%i in ('git branch --show-current 2^>nul') do set "BRANCH=%%i"
if "%BRANCH%"=="" set "BRANCH=Page-bac"

echo [i] Branche actuelle : %BRANCH%
echo [i] Depot distant    : https://github.com/4ure1/NERVEUX-
echo.

:: 3. Afficher les fichiers modifies
echo ----------------------------------------------------------------
echo Statut des fichiers :
echo ----------------------------------------------------------------
git status -s
echo ----------------------------------------------------------------
echo.

:: 4. Ajouter tous les fichiers modifies, crees et supprimes
echo [+] Preparation des fichiers (git add -A)...
git add -A

:: Verifier s'il y a des changements a committer
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo.
    echo [i] Aucun nouveau changement a committer.
    echo Verification des commits locaux en attente d'envoi...
) else (
    echo.
    set /p "MSG=Message du commit (Entree pour message auto) : "
    if "%MSG%"=="" (
        set "MSG=Mise a jour NERVEUX - %date% %time%"
    )
    echo.
    echo [+] Enregistrement du commit...
    git commit -m "%MSG%"
)

:: 5. Pousser vers la branche courante
echo.
echo [+] Envoi vers GitHub (origin/%BRANCH%)...
git push origin %BRANCH%

if %errorlevel% neq 0 (
    echo.
    echo [ERREUR] L'envoi a echoue. Verifiez votre connexion ou faites un pull prealable :
    echo         git pull origin %BRANCH%
    echo.
    pause
    exit /b 1
)

echo.
echo ================================================================
echo [SUCCES] Vos modifications sont en ligne sur GitHub !
echo Lien : https://github.com/4ure1/NERVEUX-/tree/%BRANCH%
echo ================================================================
echo.

:: 6. Proposer de fusionner aussi sur 'main' si on est sur une autre branche
if /i not "%BRANCH%"=="main" (
    echo Voulez-vous egalement envoyer ces changements sur la branche 'main' ? (O/N)
    set /p "DOMAIN=[Defaut: N] : "
    if /i "%DOMAIN%"=="O" (
        echo.
        echo [+] Synchronisation de main avec %BRANCH%...
        echo     (force-push - fonctionne meme avec historiques divergents)
        git push origin %BRANCH%:main --force
        if %errorlevel% neq 0 (
            echo.
            echo [ERREUR] Force-push vers main a echoue.
            echo Essayez manuellement : git push origin %BRANCH%:main --force
            echo.
        ) else (
            echo.
            echo [SUCCES] La branche main est maintenant identique a %BRANCH% !
            echo Lien : https://github.com/4ure1/NERVEUX-/tree/main
        )
    )
)

echo.
pause
