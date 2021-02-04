from django.http import HttpResponse


def homepage(request):
    html = """
<html>
    <body>
        <h1>Zacni ucit</h1>
        <ul>
            <li><a href="/admin/">Administrace</a></li>
            <li><a href="http://localhost:7474/">Neo4j konzole</a></li>
            <li><a href="/graphql/">GraphQl</a></li>
            <li><a href="https://wiki.cesko.digital/pages/viewpage.action?pageId=1577190">Wiki</a></li>
            <li>Slack <a href="https://cesko-digital.slack.com/archives/C01CDSTV8KF">obecny</a>, <a href="https://cesko-digital.slack.com/archives/C01KFLXMH5Y">vyvojarsky</a></li>
            <li><a href="https://github.com/cesko-digital/zacni-ucit">GitHub</a></li>
        </ul>
    </body>
</html>
"""
    return HttpResponse(html)
