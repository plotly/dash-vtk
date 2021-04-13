# AUTO GENERATED FILE - DO NOT EDIT

export vtk_glyphrepresentation

"""
    vtk_glyphrepresentation(;kwargs...)
    vtk_glyphrepresentation(children::Any;kwargs...)
    vtk_glyphrepresentation(children_maker::Function;kwargs...)


A GlyphRepresentation component.
GlyphRepresentation using a source on port=1 as Glyph and the points of the source on port=0 to position the given glyphs
It takes the following set of properties:
- actor: Properties to assign to the vtkActor
- mapper: Properties to assign to the vtkGlyph3DMapper
- property: Properties to assign to the vtkProperty (actor.getProperty())
- colorMapPreset: Name of the preset to use for controlling the color mapping
- colorDataRange: Range to use for the color scale
Keyword arguments:
- `children` (Array of a list of or a singular dash component, string or numbers | a list of or a singular dash component, string or number; optional)
- `id` (String; optional): The ID used to identify this component.
- `actor` (Dict; optional): Properties to set to the actor
- `colorDataRange` (Array of Reals; optional): Data range use for the colorMap
- `colorMapPreset` (String; optional): Preset name for the lookup table color map
- `mapper` (Dict; optional): Properties to set to the vtkGlyph3DMapper
- `property` (Dict; optional): Properties to set to the actor.property
"""
function vtk_glyphrepresentation(; kwargs...)
        available_props = Symbol[:children, :id, :actor, :colorDataRange, :colorMapPreset, :mapper, :property]
        wild_props = Symbol[]
        return Component("vtk_glyphrepresentation", "GlyphRepresentation", "dash_vtk", available_props, wild_props; kwargs...)
end

vtk_glyphrepresentation(children::Any; kwargs...) = vtk_glyphrepresentation(;kwargs..., children = children)
vtk_glyphrepresentation(children_maker::Function; kwargs...) = vtk_glyphrepresentation(children_maker(); kwargs...)

