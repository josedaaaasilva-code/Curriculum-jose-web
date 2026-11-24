"""Genera los tres PDF del CV (castellano, catalan e ingles).

La foto se toma del PDF antiguo que ya esta en public/.
"""
import os
import sys

import pymupdf
from fpdf import FPDF

BLUE = (26, 72, 110)
RULE = (140, 170, 195)
BODY = (45, 45, 45)
GREY = (85, 85, 85)
PAGE_W = 595.28
MARGIN = 60

PUBLIC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public")

ES = [
    ("PERFIL PROFESIONAL", [
        ("p", "Tecnico informatico con formacion en Sistemas Microinformaticos y Redes (SMX) y Administracion de Sistemas Informaticos en Red (ASIR). Tengo experiencia en soporte IT, atencion a usuarios, resolucion de incidencias y mantenimiento de equipos, ademas de participacion en tareas con servidores Windows y Linux y recursos de red. Estoy ampliando mis conocimientos en virtualizacion, Docker, Kubernetes, SQL, PostgreSQL y automatizacion con scripting. Busco incorporarme a un equipo de soporte IT o sistemas donde aportar capacidad de resolucion, trato cercano con el usuario y ganas de seguir creciendo en infraestructura, Cloud y DevOps."),
    ]),
    ("EXPERIENCIA PROFESIONAL", [
        ("e", "TECNICO IT I DEVOps | Hardysoft Consultories | 12/2025 - 11/2026",
         "Configuracion y administracion de servidores Windows y Linux y gestion de recursos de red. Colaboracion en la automatizacion de tareas mediante scripting y en proyectos de infraestructura y despliegue de servicios. Atencion a clientes y apoyo en la resolucion de problemas tecnicos."),
        ("e", "AUXILIAR IT | Ajuntament de Tordera | 01/2024 - 10/2024",
         "Soporte a usuarios y resolucion de incidencias. Instalacion, configuracion y mantenimiento de ordenadores, impresoras y servidores; control del inventario informatico y apoyo en tareas basicas de red y seguridad."),
        ("e", "CAMARERO | La Masia, Tordera | 2023 - Actualidad",
         "Atencion al cliente, gestion de pedidos y organizacion del almacen. Coordinacion con el equipo en momentos de alta actividad, manteniendo un trato eficaz y profesional; experiencia aplicable a la comunicacion, la organizacion y el trabajo bajo presion."),
    ]),
    ("FORMACION ACADEMICA", [
        ("e", "CFGS ADMINISTRACION DE SISTEMAS INFORMATICOS EN RED | IES Sa Palomera, Blanes | 2025 - Actualidad",
         "Segundo curso. Administracion de sistemas Windows y Linux, redes y servicios, bases de datos SQL, automatizacion mediante scripting y despliegue de servicios con Docker; aprendizaje de Kubernetes."),
        ("e", "CFGM SISTEMAS MICROINFORMATICOS Y REDES (SMX) | IES Lluis Companys, Tordera | 2023 - 2025",
         "Montaje, configuracion y mantenimiento de equipos y redes; gestion de infraestructuras IT y resolucion de incidencias tecnicas."),
        ("e", "EDUCACION SECUNDARIA OBLIGATORIA (ESO) | IES Brianxa, Tordera | 2019 - 2023", None),
    ]),
    ("COMPETENCIAS TECNICAS", [
        ("p", "Soporte IT - Atencion a usuarios - Resolucion de incidencias - Windows y Linux - Administracion de servidores - Redes y servicios - SQL y PostgreSQL - Python - PowerShell - Scripting - Docker - Kubernetes - Virtualizacion - Redes - GitHub - Microsoft Office - Documentacion tecnica"),
    ]),
    ("COMPETENCIAS PERSONALES E IDIOMAS", [
        ("b", "Personales: ", "Comunicacion - Trabajo en equipo - Adaptabilidad - Resolucion de problemas - Responsabilidad - Aprendizaje rapido"),
        ("b", "Idiomas: ", "Catalan: nativo - Castellano: nativo - Ingles: B1 - Portugues: A2"),
    ]),
    ("PROYECTO ACADEMICO", [
        ("p", "Diseno e implantacion de infraestructuras IT, desde el montaje de redes hasta la administracion de servidores Windows/Linux y la aplicacion de politicas de seguridad. Proyecto academico en curso: digitalizacion de un hospital mediante sistemas de alta disponibilidad, programacion y bases de datos."),
    ]),
]

CA = [
    ("PERFIL PROFESSIONAL", [
        ("p", "Tecnic informatic amb formacio en Sistemes Microinformatics i Xarxes (SMX) i Administracio de Sistemes Informatics en Xarxa (ASIR). Tinc experiencia en suport IT, atencio a usuaris, resolucio d'incidencies i manteniment d'equips, a mes de participacio en tasques amb servidors Windows i Linux i recursos de xarxa. Estic ampliant els meus coneixements en virtualitzacio, Docker, Kubernetes, SQL, PostgreSQL i automatitzacio amb scripting. Busco incorporar-me a un equip de suport IT o sistemes on aportar capacitat de resolucio, tracte proper amb l'usuari i ganes de continuar creixent en infraestructura, Cloud i DevOps."),
    ]),
    ("EXPERIENCIA PROFESSIONAL", [
        ("e", "TECNIC IT I DEVOps | Hardysoft Consultories | 12/2025 - 11/2026",
         "Configuracio i administracio de servidors Windows i Linux i gestio de recursos de xarxa. Collaboracio en l'automatitzacio de tasques mitjancant scripting i en projectes d'infraestructura i desplegament de serveis. Atencio a clients i suport en la resolucio de problemes tecnics."),
        ("e", "AUXILIAR IT | Ajuntament de Tordera | 01/2024 - 10/2024",
         "Suport a usuaris i resolucio d'incidencies. Instal-lacio, configuracio i manteniment d'ordinadors, impressores i servidors; control de l'inventari informatic i suport en tasques basiques de xarxa i seguretat."),
        ("e", "CAMBRER | La Masia, Tordera | 2023 - Actualitat",
         "Atencio al client, gestio de comandes i organitzacio del magatzem. Coordinacio amb l'equip en moments d'alta activitat, mantenint un tracte eficac i professional; experiencia aplicable a la comunicacio, l'organitzacio i el treball sota pressio."),
    ]),
    ("FORMACIO ACADEMICA", [
        ("e", "CFGS ADMINISTRACIO DE SISTEMES INFORMATICS EN XARXA | IES Sa Palomera, Blanes | 2025 - Actualitat",
         "Segon curs. Administracio de sistemes Windows i Linux, xarxes i serveis, bases de dades SQL, automatitzacio mitjancant scripting i desplegament de serveis amb Docker; aprenentatge de Kubernetes."),
        ("e", "CFGM SISTEMES MICROINFORMATICS I XARXES (SMX) | IES Lluis Companys, Tordera | 2023 - 2025",
         "Muntatge, configuracio i manteniment d'equips i xarxes; gestio d'infraestructures IT i resolucio d'incidencies tecniques."),
        ("e", "EDUCACIO SECUNDARIA OBLIGATORIA (ESO) | IES Brianxa, Tordera | 2019 - 2023", None),
    ]),
    ("COMPETENCIES TECNIQUES", [
        ("p", "Suport IT - Atencio a usuaris - Resolucio d'incidencies - Windows i Linux - Administracio de servidors - Xarxes i serveis - SQL i PostgreSQL - Python - PowerShell - Scripting - Docker - Kubernetes - Virtualitzacio - Xarxes - GitHub - Microsoft Office - Documentacio tecnica"),
    ]),
    ("COMPETENCIES PERSONALS I IDIOMES", [
        ("b", "Personals: ", "Comunicacio - Treball en equip - Adaptabilitat - Resolucio de problemes - Responsabilitat - Aprenentatge rapid"),
        ("b", "Idiomes: ", "Catala: natiu - Castella: natiu - Angles: B1 - Portugues: A2"),
    ]),
    ("PROJECTE ACADEMIC", [
        ("p", "Disseny i implantacio d'infraestructures IT, des del muntatge de xarxes fins a l'administracio de servidors Windows/Linux i l'aplicacio de politiques de seguretat. Projecte academic en curs: digitalitzacio d'un hospital mitjancant sistemes d'alta disponibilitat, programacio i bases de dades."),
    ]),
]

EN = [
    ("PROFESSIONAL PROFILE", [
        ("p", "IT technician trained in Microcomputer Systems and Networks (SMX) and in Networked Computer Systems Administration (ASIR). I have experience in IT support, user assistance, incident resolution and equipment maintenance, as well as taking part in tasks involving Windows and Linux servers and network resources. I am expanding my knowledge of virtualisation, Docker, Kubernetes, SQL, PostgreSQL and scripting automation. I am looking to join an IT support or systems team where I can contribute problem-solving skills, a close and approachable manner with users, and the drive to keep growing in infrastructure, Cloud and DevOps."),
    ]),
    ("WORK EXPERIENCE", [
        ("e", "IT TECHNICIAN & DEVOPS | Hardysoft Consultories | 12/2025 - 11/2026",
         "Configuration and administration of Windows and Linux servers and management of network resources. Collaboration in task automation through scripting and in infrastructure and service deployment projects. Customer service and support in resolving technical problems."),
        ("e", "IT ASSISTANT | Tordera Town Council | 01/2024 - 10/2024",
         "User support and incident resolution. Installation, configuration and maintenance of computers, printers and servers; IT inventory control and support in basic networking and security tasks."),
        ("e", "WAITER | La Masia, Tordera | 2023 - Present",
         "Customer service, order management and warehouse organisation. Coordination with the team during peak periods, maintaining an effective and professional manner; experience applicable to communication, organisation and working under pressure."),
    ]),
    ("EDUCATION", [
        ("e", "HIGHER DEGREE IN NETWORKED COMPUTER SYSTEMS ADMINISTRATION | IES Sa Palomera, Blanes | 2025 - Present",
         "Second year. Windows and Linux systems administration, networks and services, SQL databases, scripting automation and service deployment with Docker; learning Kubernetes."),
        ("e", "INTERMEDIATE DEGREE IN MICROCOMPUTER SYSTEMS AND NETWORKS (SMX) | IES Lluis Companys, Tordera | 2023 - 2025",
         "Assembly, configuration and maintenance of computers and networks; IT infrastructure management and technical incident resolution."),
        ("e", "COMPULSORY SECONDARY EDUCATION (ESO) | IES Brianxa, Tordera | 2019 - 2023", None),
    ]),
    ("TECHNICAL SKILLS", [
        ("p", "IT support - User assistance - Incident resolution - Windows and Linux - Server administration - Networks and services - SQL and PostgreSQL - Python - PowerShell - Scripting - Docker - Kubernetes - Virtualisation - Networking - GitHub - Microsoft Office - Technical documentation"),
    ]),
    ("PERSONAL SKILLS AND LANGUAGES", [
        ("b", "Personal: ", "Communication - Teamwork - Adaptability - Problem solving - Responsibility - Fast learning"),
        ("b", "Languages: ", "Catalan: native - Spanish: native - English: B1 - Portuguese: A2"),
    ]),
    ("ACADEMIC PROJECT", [
        ("p", "Design and implementation of IT infrastructures, from network assembly to Windows/Linux server administration and the application of security policies. Ongoing academic project: digitalisation of a hospital through high-availability systems, programming and databases."),
    ]),
]

CVS = {
    "curriculum-jose-da-silva.pdf": ("TECNIC INFORMATIC | SUPORT IT | ADMINISTRACIO DE SISTEMES", CA),
    "curriculum-jose-da-silva-es.pdf": ("TECNICO INFORMATICO | SOPORTE IT | ADMINISTRACION DE SISTEMAS", ES),
    "curriculum-jose-da-silva-en.pdf": ("IT TECHNICIAN | IT SUPPORT | SYSTEMS ADMINISTRATION", EN),
}
CONTACT = "Tordera, Barcelona   -   722 827 664   -   josedaaaasilva@gmail.com"


class CV(FPDF):
    def __init__(self, photo):
        super().__init__(orientation="P", unit="pt", format="A4")
        self.photo = photo
        self.set_auto_page_break(True, margin=48)
        self.set_margins(MARGIN, MARGIN, MARGIN)
        self.set_title("CV Jose da Silva")
        self.set_author("Jose da Silva")

    def rule(self, y, color=RULE, width=0.7):
        self.set_draw_color(*color)
        self.set_line_width(width)
        self.line(MARGIN, y, PAGE_W - MARGIN, y)

    def header_block(self, role):
        pw = 140
        px = PAGE_W - MARGIN - pw
        if self.photo:
            self.image(self.photo, x=px, y=44, w=pw, h=pw)
        self.set_text_color(*BLUE)
        self.set_font("Helvetica", "B", 25)
        self.set_xy(MARGIN, 54)
        self.cell(0, 30, "JOSE DA SILVA", align="L")
        self.set_text_color(40, 40, 40)
        self.set_font("Helvetica", "B", 8.2)
        self.set_xy(MARGIN, 92)
        self.multi_cell(px - MARGIN - 2, 11.5, role, align="L")
        self.set_text_color(*GREY)
        self.set_font("Helvetica", "", 9.2)
        self.set_xy(MARGIN, self.get_y() + 5)
        self.cell(0, 12, CONTACT, align="L")
        self.rule(198)

    def section(self, title):
        y0 = self.get_y()
        self.set_text_color(*BLUE)
        self.set_font("Helvetica", "B", 10.6)
        self.set_xy(MARGIN, y0)
        self.cell(0, 13, title, align="L")
        self.rule(y0 + 14.5, color=(150, 175, 200), width=0.6)
        self.set_y(y0 + 19)

    def body(self, text, lead=None):
        size, leading = 8.8, 11.6
        self.set_text_color(*BODY)
        y0 = self.get_y()
        if not lead:
            self.set_font("Helvetica", "", size)
            self.set_xy(MARGIN, y0)
            self.multi_cell(PAGE_W - 2 * MARGIN, leading, text, align="J")
            return
        words = [("B", w) for w in lead.split()] + [("", w) for w in text.split()]
        x, y = MARGIN, y0
        for style, word in words:
            self.set_font("Helvetica", style, size)
            w = self.get_string_width(word + " ")
            if x > MARGIN and x + self.get_string_width(word) > PAGE_W - MARGIN:
                x = MARGIN
                y += leading
            self.set_xy(x, y)
            self.cell(self.get_string_width(word + " "), leading, word)
            x += w
        self.set_y(y + leading)

    def entry(self, head, text):
        self.set_text_color(40, 40, 40)
        self.set_font("Helvetica", "B", 9.0)
        self.set_xy(MARGIN, self.get_y())
        self.multi_cell(PAGE_W - 2 * MARGIN, 11.6, head, align="L")
        if text:
            self.body(text)
        self.set_y(self.get_y() + 6)

    def build(self, role, sections):
        self.add_page()
        self.header_block(role)
        self.set_y(210)
        for title, items in sections:
            self.section(title)
            for item in items:
                if item[0] == "p":
                    self.body(item[1])
                    self.set_y(self.get_y() + 8)
                elif item[0] == "b":
                    self.body(item[2], lead=item[1])
                    self.set_y(self.get_y() + 2)
                else:
                    self.entry(item[1], item[2])


def extract_photo():
    for name in ("curriculum-jose-da-silva.pdf", "curriculum-jose-da-silva-es.pdf"):
        path = os.path.join(PUBLIC, name)
        if not os.path.exists(path):
            continue
        doc = pymupdf.open(path)
        for page in doc:
            for info in page.get_images(full=True):
                img = doc.extract_image(info[0])
                out = "/tmp/photo.jpg"
                with open(out, "wb") as fh:
                    fh.write(img["image"])
                doc.close()
                return out
        doc.close()
    return None


def main():
    photo = extract_photo()
    print("foto:", photo)
    for name, (role, sections) in CVS.items():
        pdf = CV(photo)
        pdf.build(role, sections)
        pdf.output(os.path.join(PUBLIC, name))
        print(name, "->", pdf.pages_count, "pagina(s)")
        if pdf.pages_count > 1:
            sys.exit("El CV no cabe en una pagina")


if __name__ == "__main__":
    main()
