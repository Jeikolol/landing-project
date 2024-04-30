import angular from '../assets/angular.svg'
import csharp from '../assets/csharp.svg'
import flutter from '../assets/flutter.svg'
import git from '../assets/git.svg'
import html from '../assets/html.svg'
import jq from '../assets/jq.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import sql from '../assets/sql.svg'
import ts from '../assets/ts.svg'
import vite from '../assets/vite.svg'

interface Skills {
    label: string;
    src: string;
}

export const whiteLogos: Skills[] = [
    { src: angular, label: 'Angular' },
    { src: csharp, label: 'C#' },
    { src: flutter, label: 'Flutter' },
    { src: git, label: 'Git' },
    { src: html, label: 'HTML' },
    { src: jq, label: 'JQuery' },
    { src: js, label: 'JavaScript' },
    { src: react, label: 'React' },
    { src: sql, label: 'Microsoft SQL' },
    { src: ts, label: 'TypeScript' },
    { src: vite, label: 'Vite' },
]

export const darkLogos: Skills[] = [
    { src: angular, label: '' },
    { src: csharp, label: '' },
    { src: flutter, label: '' },
    { src: git, label: '' },
    { src: html, label: '' },
    { src: jq, label: '' },
    { src: js, label: '' },
    { src: react, label: '' },
    { src: sql, label: '' },
    { src: ts, label: '' },
    { src: vite, label: '' },
]