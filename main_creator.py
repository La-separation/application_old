#!/usr/bin/python3
# -*- coding: utf-8 -*-

import os

def scan_dir(idir, ilist_js=[]):
	# recupere les différents fichiers .js d'un dossier
	ilist=os.listdir(idir)

	for elt in ilist:
		if os.path.isfile(idir+"/"+elt)==True:
			if elt.split(".")[-1]=="js":
				# a modifier en fonction de l'emplacement du script par rapport au dossier scanné
				path=idir.replace("./","")
				ilist_js.append(path+"/"+elt)

	for elt in ilist:
		if os.path.isdir(idir+"/"+elt)==True:
			scan_dir(idir+"/"+elt, ilist_js)

	return ilist_js


# liste des scripts prioritaires
# les scripts les plus prioritaires se trouvent dans priority_list[0] etc.
priority_list=\
[\
["scripts/libs/"],\
["scripts/main/", "scripts/variables.js"]\
]

idir="."	# dossier ou le scan est effectué
ilist_js=scan_dir(idir)

mainf=open("main_test.html","w") # file to modify

header=open("header.html","r")
txt=header.read()
header.close()

# ecrit les différents imports de scripts .js en fonction de priority_list
lenght=len(ilist_js)
for elt1 in priority_list:
	for elt2 in elt1:
		i=0
		while i<=(lenght-1):
			if ilist_js[i].find(elt2)!=-1:
				txt=txt+"\n"+"	"*2+"<script type='text/javascript' src='"+ilist_js[i]+"'></script>"
				ilist_js[i]=""
			i+=1
	txt=txt+"\n"
for elt in ilist_js:
	if elt!="":
		txt=txt+"\n"+"	"*2+"<script type='text/javascript' src='"+elt+"'></script>"

end=open("end.html", "r")
txt=txt+"\n"+"\n"+end.read()
end.close()

mainf.write(txt)
mainf.close()
