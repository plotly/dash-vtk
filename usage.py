import dash_vtk
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div(
    style={ 'width': '100%', 'height': 'calc(100vh - 16px)'},
    children=[
        dash_vtk.VtkView(
            id='view',
            children=[
                dash_vtk.VtkGeometryRepresentation([
                    dash_vtk.VtkAlgorithm(
                        vtkClass='vtkConeSource',
                        state={
                            'resolution': 64,
                            'capping': False,
                        }
                    )
                ]),
                dash_vtk.VtkGeometryRepresentation(
                    id='rep',
                    pointSize=10,
                    colorBy=['pointData', 'Temperature'],
                    children=[
                        dash_vtk.VtkPolyDataSource(
                            id='square',
                            points=[0,0,0,1,0,0,1,1,0,0,1,0],
                            polys=[4,0,1,2,3],
                            children=[
                                dash_vtk.VtkPointData(
                                    children=[
                                        dash_vtk.VtkDataArray(
                                            name='Temperature',
                                            values=[0,3,2,1]
                                        )
                                    ]
                                )
                            ]
                        )
                    ]
                )
            ]
        ),
    html.Div(id='output')
])


# @app.callback(Output('output', 'children'), [Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
